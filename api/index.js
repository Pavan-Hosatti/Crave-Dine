// Serverless function for Vercel
const app = require('../backend/app');
const dbConnection = require('../backend/database/dbConnection');

// Connect to database
dbConnection();

// Export the Express app as a serverless function
module.exports = app;
