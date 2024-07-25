const express = require('express');
const router = express.Router();
const { runRecommendationService } = require('../controllers/recommendationController');

router.post('/recommend', runRecommendationService);

module.exports = router;
