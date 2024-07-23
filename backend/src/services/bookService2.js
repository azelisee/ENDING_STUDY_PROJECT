const Book = require('../models/bookModel');

exports.borrowBook = async (bookId, userId) => {
    try {
        const book = await Book.findById(bookId);
        if (book.isBorrowed) {
            throw new Error('Book is already borrowed');
        }
        book.isBorrowed = true;
        book.borrowedBy = userId;
        await book.save();
        return book;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.returnBook = async (bookId) => {
    try {
        const book = await Book.findById(bookId);
        if (!book.isBorrowed) {
            throw new Error('Book is not borrowed');
        }
        book.isBorrowed = false;
        book.borrowedBy = null;
        await book.save();
        return book;
    } catch (error) {
        throw new Error(error.message);
    }
};
