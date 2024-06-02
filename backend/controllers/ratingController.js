const pool = require('../config/database');

// Controller functions for handling ratings
const ratingController = {
  // Add a new rating
  addRating: async (req, res) => {
    try {
      const { rating, comment, email } = req.body;
      // Validate request data here if needed
      
      // Insert the rating into the database
      const newRating = await pool.query(
        'INSERT INTO ratings (rating, comment, email) VALUES ($1, $2, $3) RETURNING *',
        [rating, comment, email]
      );

      res.status(201).json(newRating.rows[0]);
    } catch (error) {
      console.error('Error adding rating:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Get all ratings
  getAllRatings: async (req, res) => {
    try {
      // Retrieve all ratings from the database
      const ratings = await pool.query('SELECT * FROM ratings ORDER BY rating DESC');
      
      res.status(200).json(ratings.rows);
    } catch (error) {
      console.error('Error fetching ratings:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = ratingController;
