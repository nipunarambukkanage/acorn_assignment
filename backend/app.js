const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const ratingRoutes = require('./routes/ratingRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Enable CORS for only specific origin
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

// Routes
app.use('/api/ratings', ratingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
