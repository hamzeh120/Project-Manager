const {body} = require("express-validator");
const { UserModel } = require("../../models/users");
function registerValidator(){
    return [
        body("username").custom(async (value, ctx) => {
            console.log(value, ctx.req.body);
            if(value){
                const usernameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/
                if(usernameRegex.test(value)){
                    const user = await UserModel.findOne({username : value})
                    if(user) throw "نام کاربری تکراری میباشد"
                    return true;
                }
                throw "نام کاربری صحیح نمیباشد"
            }
            throw "نام کاربری نمیتواند خالی باشد"
        }),
        body("email").isEmail().withMessage("ایمیل وارد شده صحیح نمیباشد")
        .custom(async email => {
            const user = await UserModel.findOne({email})
            if(user) throw "ایمیل تکراری میباشد"
            return true;
        }),
        body("mobile").isMobilePhone().withMessage("شماره موبایل وارد شده صحیح نمیباشد")
        .custom(async mobile => {
            const user = await UserModel.findOne({mobile})
            if(user) throw "شماره موبایل تکراری میباشد"
            return true;
        }),
        body("password").isLength({min:6 , max:16}).withMessage("رمز عبور حداقل 6 و حداکثر 16 نویسه باشد").custom((value, ctx) => {
            if(!value) throw "رمز عبور نمیتواند خالی باشد"
            if(value !== ctx?.req?.body?.confirm_password) throw "رمز عبور با تکرار آن برابر نمیباشد";
            return true
        })
    ]
}
module.exports = {
    registerValidator
}