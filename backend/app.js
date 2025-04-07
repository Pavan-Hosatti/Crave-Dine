const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const reservationRouter = require('./routes/reservationRoute'); // Correct import
const dbConnection = require('./database/dbConnection');
const { errorMiddleware } = require('./error/error'); // Correct import

const app = express();
// dotenv.config({ path: "C:/Users/PAVAN HOSATTI/OneDrive/WEB DEVELOPMENT/Project - Restaurant Application/backend/config/config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/reservation', reservationRouter);

dbConnection();

app.use(errorMiddleware);

module.exports = app;

app.use('/api/v2/reservation', reservationRouter);

dbConn