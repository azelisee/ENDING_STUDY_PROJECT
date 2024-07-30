const mongoose = require('mongoose');

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
    type: {
        type: String,
        required: true,
    },
    isBorrowed: {
        type: Boolean,
        default: false
    },
    borrowedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }
});

module.exports = mongoose.model('Book', bookSchema);
