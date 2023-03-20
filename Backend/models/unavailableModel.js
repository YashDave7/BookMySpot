const mongoose = require("mongoose");

const unavailableSchema = new mongoose.Schema({
    email: String,
    unavailable: [{
        date: String,
        time: String,
    }]
});

const unavailableModel = mongoose.model("unavailableModel", unavailableSchema);
module.exports = unavailableModel;