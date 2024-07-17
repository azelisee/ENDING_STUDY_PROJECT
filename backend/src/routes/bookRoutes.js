const express = require('express');
const { getBooks, createBook } = require('../controllers/bookController');
const router = express.Router();

router.get('/getBooks', getBooks);
router.post('/createBook', createBook);

module.exports = router;
