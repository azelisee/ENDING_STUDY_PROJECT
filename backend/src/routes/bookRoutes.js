const express = require('express');
const { getBooks,
        getBook,
        createBook,
        updateBook,
        deleteBook,
        searchBooks,
        borrowBookController,
        returnBookController
    } = require('../controllers/bookController');

const router = express.Router();

router.get('/getBooks', getBooks);
router.post('/createBook', createBook);
router.get('/:id', getBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

router.post('/search', searchBooks);

router.post('/borrowBook', borrowBookController);
router.post('/returnBook', returnBookController);

module.exports = router;
