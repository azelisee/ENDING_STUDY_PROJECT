const mongoose = require('mongoose');
const user = require('../models/userModel');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishedDate: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    isBorrowed: {
        type: Boolean,
        default: false
    },
    borrowedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: user, default: null
    }
});

module.exports = mongoose.model('Book', bookSchema);
