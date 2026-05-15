const User = require("../models/User");
const jwt = require("jsonwebtoken");

// GET USERS
const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE USER
const createUser = async (req, res) => {
  try {
    const number = req.body.mobile;
    const isNumberExist = await User.findOne({ mobile: number });
    const mail = req.body.email;
    const isMailExist = await User.findOne({ email: mail });
    if (!isNumberExist && !isMailExist) {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } else {
      res.status(401).json({
        message: "User already exist with same mobile or email",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {

  try {

    const user = await User.findOne({
      mobile: req.body.mobile,
    });

    if (!user) {

      return res.status(401).json({
        message: "Wrong mobile number enter again",
      });

    }

    if (user.password !== req.body.password) {

      return res.status(401).json({
        message: "Wrong password enter again",
      });

    }

    const token = jwt.sign(

      {
        id: user._id,
        mobile: user.mobile,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }

    );
    user.token = token;

    await user.save();
    res.status(200).json({

      message: "Logged in successfully",

      token,

      user,

    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
// UDPATE USER
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "User not Updated",
    });
  }
};
// DELETE USER
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "User not Deleted",
    });
  }
};

module.exports = {
  getUsers,
  updateUser,
  deleteUser,
  createUser,
  loginUser,
};
