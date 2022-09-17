const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    users: {type: [mongoose.Types.ObjectId] , default: []},
    owner: {type: mongoose.Types.ObjectId , required: true}
    
})
const TeamModel = mongoose.Model("team", teamSchema);

module.exports = {
    TeamModel
}