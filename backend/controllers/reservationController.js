const Reservation = require('../models/reservationSchema');
const { ErrorHandler } = require('../error/error');
const mongoose = require('mongoose');

// Test route
exports.test = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Test route is working"
    });
};

// Send reservation
exports.sendReservation = async (req, res, next) => {
    try {
        const { firstName, lastName, email, phone, date, time, address } = req.body;
        
        console.log("Received reservation data:", req.body);
        
        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !date || !time || !address) {
            return next(new ErrorHandler("Please fill all fields", 400));
        }
        
        // Create reservation
        const reservation = await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time,
            address
        });
        
        console.log("Created reservation:", reservation);
        
        res.status(201).json({
            success: true,
            message: "Reservation sent successfully",
            reservation
        });
    } catch (error) {
        console.error("Error in sendReservation:", error);
        return next(new ErrorHandler(error.message, 500));
    }
};

// Check existing reservations
exports.checkExistingReservations = async (req, res, next) => {
    try {
        // Check if collection exists and count documents
        const collections = await mongoose.connection.db.listCollections({ name: 'RESTAURANT2' }).toArray();
        
        if (collections.length === 0) {
            return res.status(200).json({
                success: true,
                message: "Collection does not exist yet",
                collections: await mongoose.connection.db.listCollections().toArray()
            });
        }
        
        const count = await mongoose.connection.db.collection('RESTAURANT2').countDocuments();
        
        const documents = await mongoose.connection.db.collection('RESTAURANT2').find({}).limit(5).toArray();
        
        return res.status(200).json({
            success: true,
            message: `Found ${count} documents in RESTAURANT2 collection`,
            sampleDocuments: documents
        });
    } catch (error) {
        console.error("Error checking reservations:", error);
        return next(new ErrorHandler(error.message, 500));
    }
};

// Get all reservations
exports.getAllReservations = async (req, res, next) => {
    try {
        const reservations = await Reservation.find();
        
        return res.status(200).json({
            success: true,
            count: reservations.length,
            reservations
        });
    } catch (error) {
        console.error("Error getting reservations:", error);
        return next(new ErrorHandler(error.message, 500));
    }
};

// List all collections
exports.listCollections = async (req, res, next) => {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        
        return res.status(200).json({
            success: true,
            databaseName: mongoose.connection.db.databaseName,
            collections: collections.map(c => c.name)
        });
    } catch (error) {
        console.error("Error listing collections:", error);
        return next(new ErrorHandler(error.message, 500));
    }
};

// The exports.functionName syntax already exports the functions
// No need for module.exports = {...} at the bottom


