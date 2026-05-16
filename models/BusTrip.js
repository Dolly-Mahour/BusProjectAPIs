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
    fromDate: {
        type: Date,
        required: true
    },
    toDate: {
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
        type: String,
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