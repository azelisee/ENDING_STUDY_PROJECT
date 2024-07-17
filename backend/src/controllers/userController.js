const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  console.log("createUser called with body:", req.body);
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json({ user: savedUser });
  } catch (error) {
    console.log("Error in createUser:", error.message);
    res.status(500).json({ error: error.message });
  }
};

