const express = require('express');
const router = express.Router();

// Import the rating controller
const ratingController = require('../controllers/ratingController');

// Define routes for handling ratings
router.post('/', ratingController.addRating);
router.get('/', ratingController.getAllRatings);

module.exports = router;
