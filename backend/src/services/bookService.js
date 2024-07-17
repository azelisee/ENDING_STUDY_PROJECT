const Book = require('../models/bookModel');

exports.getAllBooks = async () => {
    try {
        return await Book.find();
    } catch (error) {
        throw new Error(error.message);
    }
};

