const { ErrorHandler } = require('../error/error');
const Reservation = require('../models/reseervationSchema');

const sendReservation = async (req, res, next) => {
  console.log("sendReservation function called");
  console.log("Request Body:", req.body);

  const { firstName, lastName, email, phone, date, time, address } = req.body;

  if (!firstName || !lastName || !email || !phone || !date || !time || !address) {
    console.log("Validation failed: Missing fields");
    return next(new ErrorHandler("Please fill full reservation form!", 400));
  }

  try {
    console.log("Attempting to create reservation...");
    await Reservation.create({ firstName, lastName, email, phone, date, time, address });
    console.log("Reservation created successfully!");

    return res.status(200).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    console.error("Error while creating reservation:", error.message);
    return next(new ErrorHandler(error.message, 500));
  }
};

module.exports = { sendReservation };
