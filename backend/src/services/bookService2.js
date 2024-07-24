const User = require('../models/userModel');
const Book = require('../models/bookModel');

exports.borrowBook = async (req, res) => {
    try {
        const { bookId, userId } = req.body;
        const book = await Book.findById(bookId);
        const user = await User.findById(userId);

        if (book.isBorrowed) {
            return res.status(400).json({ message: 'Book is already borrowed' });
        }

        book.isBorrowed = true;
        book.borrowedBy = user._id;
        await book.save();

        user.borrowedBooks.push(book._id);
        await user.save();

        res.json({ message: 'Book borrowed successfully', book });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.returnBook = async (req, res) => {
    try {
        const { bookId, userId } = req.body;
        const book = await Book.findById(bookId);
        const user = await User.findById(userId);

        if (!book.isBorrowed) {
            return res.status(400).json({ message: 'Book is not currently borrowed' });
        }

        book.isBorrowed = false;
        book.borrowedBy = null;
        await book.save();

        user.borrowedBooks.pull(book._id);
        user.returnedBooks.push(book._id);
        await user.save();

        res.json({ message: 'Book returned successfully', book });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
