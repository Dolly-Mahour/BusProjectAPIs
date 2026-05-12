const mongoose = require("mongoose");
const busTripsSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    departureTime: {
        type: String,
        required: true
    },
    arrivalTime: {
        type: String,
        required: true
    },
    operator: {
        type: String,
        required: true
    },
    ticketPrice: {
        type: Number,
        required: true
    },
    type: {
        type: Boolean,
        required: true
    },
    totalSeats: {
        type: Number,
        required: true
    },
    remainingSeats: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model(
    "allTrips",
    busTripsSchema
);