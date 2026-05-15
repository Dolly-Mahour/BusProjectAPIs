const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

router.get("/verify-token", verifyToken, (req, res) => {

  res.status(200).json({
    success: true,
    user: req.user
  });

});

module.exports = router;