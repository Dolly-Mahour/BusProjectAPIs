const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        minlength: 10
    },
    password: {
        type: String,
        required: true,
        minlength: 8 
    },
    refferalcode: {
        type: String,
    }

});

module.exports = mongoose.model(
    "User",
    userSchema
);