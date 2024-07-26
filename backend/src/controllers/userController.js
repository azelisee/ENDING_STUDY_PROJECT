const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().populate('borrowedBooks').populate('returnedBooks');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
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
      // Récupérer les détails des livres empruntés
      const borrowedBooks = await User.find({ borrowedBooks: { $in: user.borrowedBooks } });
      res.status(200).json(borrowedBooks);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

exports.getReturnedBooksByUser = async (req, res) => {
  try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      // Récupérer les détails des livres retournés
      const returnedBooks = await User.find({ returnedBooks: { $in: user.returnedBooks } });
      res.status(200).json(returnedBooks);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

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
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
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