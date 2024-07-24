const User = require('../models/userModel');
//const Book = require('../models/Book');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json({ user: savedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBorrowedBooksByUser = async (req, res) => {
  try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.json(user.borrowedBooks);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

exports.getReturnedBooksByUser = async (req, res) => {
  try {
      const userId = req.params.id;
      const user = await User.findById(userId).populate('returnedBooks');
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.json(user.returnedBooks);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
