const User = require('../models/userModel');
<<<<<<< HEAD
const bcrypt = require('bcryptjs');
=======
//const Book = require('../models/Book');
>>>>>>> origin/test_branch

exports.getUsers = async (req, res) => {
  try {
      const users = await User.find().populate('borrowedBooks').populate('returnedBooks');
      console.log('Fetched users:', users);
      res.status(200).json(users);
  } catch (error) {
      console.error('Error fetching users:', error);
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
      const user = await User.findById(userId).populate('borrowedBooks');
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

<<<<<<< HEAD
=======
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

>>>>>>> origin/test_branch
exports.getReturnedBooksByUser = async (req, res) => {
  try {
      const userId = req.params.id;
      const user = await User.findById(userId).populate('returnedBooks');
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
<<<<<<< HEAD
      res.status(200).json(user);
=======
      res.json(user.returnedBooks);
>>>>>>> origin/test_branch
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
<<<<<<< HEAD

exports.getUser = async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ user });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { password, ...updateData } = req.body;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
          return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};
=======
>>>>>>> origin/test_branch
