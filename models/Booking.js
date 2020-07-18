const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'event',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Booking = mongoose.model('booking', BookingSchema);
