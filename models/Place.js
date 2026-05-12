const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
    placeName:{
        type:String,
        require:true,
    }
});

module.exports = mongoose.model(
    "Place",
    placeSchema
);