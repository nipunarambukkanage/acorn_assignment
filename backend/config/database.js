const { Pool } = require('pg');

// Create a new pool instance with database connection details
const pool = new Pool({
  user: 'postgres', 
  host: 'localhost', 
  database: 'postgres', 
  password: 'abc123!@#', 
  port: 5432, 
});

// Export the pool instance to be used by other modules
module.exports = pool;
