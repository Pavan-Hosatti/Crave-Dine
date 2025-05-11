const express = require('express');
const cors = require('cors');
const reservationRouter = require('./routes/reservationRoute');
const dbConnection = require('./database/dbConnection');
const { errorMiddleware } = require('./error/error');

const app = express();

// Note: We're removing the dotenv config here since it's already loaded in server.js

// CORS configuration
app.use(cors({
  origin: true, // Allow requests from any origin
  methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger middleware
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// Root route
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Restaurant Reservation API",
        endpoints: {
            test: "/api/v1/reservation/test",
            reservation: "/api/v1/reservation/send"
        }
    });
});

// API Routes
app.use('/api/v1/reservation', reservationRouter);

// Database Connection
dbConnection();

// Error Middleware
app.use(errorMiddleware);

module.exports = app;
