const express = require("express");

const router = express.Router();

const {
    getBusTrips,
    createBusTrips,
    updateBusTrips,
    deleteBusTrips
} = require("../controllers/tripSearchController");


// GET API
router.get("/", getBusTrips);


// POST API
router.post("/", createBusTrips);

router.put("/:id", updateBusTrips);

router.delete("/:id", deleteBusTrips);

module.exports = router;