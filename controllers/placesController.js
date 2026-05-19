const Place = require("../models/Place");


// GET PLACES
const getPlaces = async (req, res) => {

    try {

        const places = await Place.find();

        res.status(200).json(places);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// CREATE PLACE
const createPlace = async (req, res) => {

    try {

        const place = await Place.create(req.body);

        res.status(201).json(place);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// UDPATE PLACE
const updatePlace = async (req, res) => {

    try {

        const place = await Place.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(place);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
// DELETE PLACE
const deletePlace = async (req, res) => {

    try {

        const place = await Place.findByIdAndDelete(req.params.id);

        res.status(200).json(place);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    getPlaces,
    updatePlace,
    deletePlace,
    createPlace
};