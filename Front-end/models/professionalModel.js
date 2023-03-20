const mongoose = require("mongoose");

const professionalSchema = new mongoose.Schema({
    name: String,
    profession: String,
    location: String,
    rate: String,
    email: String,
    contact: String,
    time: String,
    password: String
});

const professionalModel = mongoose.model("professionalModel", professionalSchema);
module.exports = professionalModel;