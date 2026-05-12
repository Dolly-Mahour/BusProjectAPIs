const express = require("express");

const router = express.Router();

const {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/userController");


// GET API
router.get("/", getUsers);


// POST API
router.post("/", createUser);
router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;