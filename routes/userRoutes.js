const express = require("express");

const router = express.Router();

const {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    loginUser
} = require("../controllers/userController");


// GET API
router.get("/", getUsers);

router.post("/login", loginUser);

// POST API
router.post("/", createUser);



router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;