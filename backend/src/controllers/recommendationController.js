const User = require('../models/userModel');
const Book = require('../models/bookModel');

exports.runRecommendationService = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.findOne({ name, email }).populate('borrowedBooks');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const borrowedGenres = user.borrowedBooks.map(book => book.gender);
        const uniqueGenres = [...new Set(borrowedGenres)];

        const recommendedBooks = await Book.find({ gender: { $in: uniqueGenres } });

        res.status(200).json({ recommendations: recommendedBooks });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
