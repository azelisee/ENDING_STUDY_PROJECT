const express = require('express');
const { getUsers,
        createUser,
        getBorrowedBooksByUser,
        getReturnedBooksByUser
    } = require('../controllers/userController');
const router = express.Router();

router.get('/getUsers', getUsers);
router.post('/createUser', createUser);

// Route pour voir tous les livres empruntés par un utilisateur
router.get('/borrowed-books/:userId', getBorrowedBooksByUser);

// Route pour voir tous les livres retournés par un utilisateur
router.get('/returned-books/:userId', getReturnedBooksByUser);

module.exports = router;







