const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    first_name: {type: String},
    last_name: {type: String},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    mobile: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    roles: {type: [String] , default: ["USER"]},
    skill: {type: [String], default: []},
    teams: {type: [mongoose.Types.ObjectId], default: []}
    
})
const UserModel = mongoose.model("user", userSchema);

module.exports = {
    UserModel
}