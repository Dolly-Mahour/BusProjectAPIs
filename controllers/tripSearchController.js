const BusTrips = require("../models/BusTrip");


// GET BusTrips
const getBusTrips = async (req, res) => {

    try {

        const trips = await BusTrips.find();

        res.status(200).json(trips);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const createBusTrips = async (req, res) => {

    try {

        const trips = await BusTrips.create(req.body);

        res.status(200).json(trips);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Search BusTrips
const searchBusTrips = async (req, res) => {

    try {
        const { from, to } = req.body;
        const buses = await BusTrips.find({
            from: { $regex: from, $options: "i" },
            to: { $regex: to, $options: "i" },
        });

        res.status(200).json(buses);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// UDPATE BusTrips
const updateBusTrips = async (req, res) => {

    try {

        const trips = await BusTrips.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(201).json(trips);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
// DELETE BusTrips
const deleteBusTrips = async (req, res) => {

    try {

        const trips = await BusTrips.findByIdAndDelete(req.params.id);

        res.status(201).json(trips);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    getBusTrips,
    updateBusTrips,
    deleteBusTrips,
    createBusTrips,
    searchBusTrips
};