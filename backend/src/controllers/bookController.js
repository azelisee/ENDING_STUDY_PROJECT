const Book = require('../models/bookModel');
const { borrowBook, returnBook } = require('../services/bookService2');


exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({ books });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json({ book });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(201).json({ book: savedBook });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json({ book: updatedBook });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.searchBooks = async (req, res) => {
    try {
        const query = req.body.query;
        const books = await Book.find({
            $or: [
                { title: new RegExp(query, 'i') },
                { author: new RegExp(query, 'i') },
                { gender: new RegExp(query, 'i') }
            ]
        });
        res.json({ books });
    } catch (error) {
        res.status(500).json({ message: 'Error searching books', error });
    }
};

exports.borrowBookController = async (req, res) => {
    try {
        const { bookId, userId } = req.body;
        const book = await borrowBook(bookId, userId);
        res.status(200).json({ book });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.returnBookController = async (req, res) => {
    try {
        const { bookId } = req.body;
        const book = await returnBook(bookId);
        res.status(200).json({ book });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

