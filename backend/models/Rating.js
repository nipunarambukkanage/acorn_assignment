// Define the schema for the ratings table
const RatingSchema = `
  CREATE TABLE IF NOT EXISTS ratings (
    id SERIAL PRIMARY KEY,
    rating INTEGER NOT NULL,
    comment TEXT NOT NULL,
    email TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

module.exports = RatingSchema;
