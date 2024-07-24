const express = require('express');
const router = express.Router();
const { runRecommendationService } = require('../controllers/recommendationController');

router.get('/recommend', runRecommendationService);

module.exports = router;
