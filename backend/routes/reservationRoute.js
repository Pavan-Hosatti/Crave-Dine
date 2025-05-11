const express = require('express');
const reservationController = require('../controllers/reservationController');

const router = express.Router();

// Use direct references to the controller functions
router.get('/test', reservationController.test);
router.post('/send', reservationController.sendReservation);
router.get('/check', reservationController.checkExistingReservations);
router.get('/all', reservationController.getAllReservations);
router.get('/collections', reservationController.listCollections);

module.exports = router;

