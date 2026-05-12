const BusTrips = require("../models/BusTrip");


// GET BusTrips
const getBusTrips = async (req, res) => {

    try {

        const BusTrips = await BusTrips.find();

        res.status(200).json(BusTrips);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// CREATE BusTrips
const createBusTrips = async (req, res) => {

    try {

        const BusTrips = await BusTrips.create(req.body);

        res.status(201).json(BusTrips);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// UDPATE BusTrips
const updateBusTrips = async (req, res) => {

    try {

        const BusTrips = await BusTrips.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(201).json(BusTrips);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
// DELETE BusTrips
const deleteBusTrips = async (req, res) => {

    try {

        const BusTrips = await BusTrips.findByIdAndDelete(req.params.id);

        res.status(201).json(BusTrips);

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
    createBusTrips
};