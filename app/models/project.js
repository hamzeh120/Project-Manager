const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    text: {type: String},
    image: {type: String, default: "/public/default/default.png"},
    team: {type: mongoose.Types.ObjectId},
    owner: {type: mongoose.Types.ObjectId , required: true},
    private: {type: Boolean, default: true}
    
})
const ProjectModel = mongoose.Model("user", projectSchema);

module.exports = {
    ProjectModel
}