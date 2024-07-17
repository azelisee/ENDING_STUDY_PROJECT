const Book = require('../models/bookModel');

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({ books });
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

