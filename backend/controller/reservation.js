const ErrorHandler = require('../error/error.js');
const { Reservation } = require('../models/reseervationSchema.js');

const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill full reservation form!", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, phone, date, time });

    return res.status(200).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

module.exports = { sendReservation };