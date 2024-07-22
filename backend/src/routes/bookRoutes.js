const express = require('express');
const { getBooks, getBook, createBook, updateBook, deleteBook } = require('../controllers/bookController');
const router = express.Router();

router.get('/getBooks', getBooks);
router.post('/createBook', createBook);
router.get('/books/:id', getBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);
module.exports = router;








module.exports = router;

