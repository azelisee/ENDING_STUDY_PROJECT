const express = require('express');
const { getUsers,
        createUser,
<<<<<<< HEAD
        getUser,
        updateUser,
        deleteUser,
=======
>>>>>>> origin/test_branch
        getBorrowedBooksByUser,
        getReturnedBooksByUser
    } = require('../controllers/userController');
const router = express.Router();

router.get('/getUsers', getUsers);
router.post('/createUser', createUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

// Route pour voir tous les livres empruntés par un utilisateur
router.get('/borrowed-books/:id', getBorrowedBooksByUser);

// Route pour voir tous les livres retournés par un utilisateur
router.get('/returned-books/:id', getReturnedBooksByUser);

// Route pour voir tous les livres empruntés par un utilisateur
router.get('/borrowed-books/:userId', getBorrowedBooksByUser);

// Route pour voir tous les livres retournés par un utilisateur
router.get('/returned-books/:userId', getReturnedBooksByUser);

module.exports = router;







