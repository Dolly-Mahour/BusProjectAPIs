const express = require("express");

const router = express.Router();

const {
    getBusTrips,
    createBusTrips,
    updateBusTrips,
    deleteBusTrips,
    searchBusTrips
} = require("../controllers/tripSearchController");


// GET API
router.get("/", getBusTrips);

router.post("/searchtrips", searchBusTrips);

// POST API
router.post("/", createBusTrips);

router.put("/:id", updateBusTrips);

router.delete("/:id", deleteBusTrips);

module.exports = router;