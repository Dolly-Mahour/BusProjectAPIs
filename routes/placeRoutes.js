const express = require("express");

const router = express.Router();

const {
   getPlaces,
    updatePlace,
    deletePlace,
    createPlace
} = require("../controllers/placesController");


// GET API
router.get("/", getPlaces);

// POST API
router.post("/", createPlace);

router.put("/:id", updatePlace);

router.delete("/:id", deletePlace);

module.exports = router;