const { Schema, model } = require('mongoose');

const bookingSchema = new Schema(
  {
    trekkersCount: {
      type: Number,
      required: true,
    },
    trekId: {
      type: Schema.Types.ObjectId,
      ref: 'Trek',
    },
    departureDate: {
      type: Date,
      required: true,
    },
    paymentPart: {
      type: String,
      enum: ['full', 'deposit'],
      required: true,
    },
    paidAmount: {
      type: Number,
      required: true,
    },
    totalValue: {
      type: Number,
      required: true,
    },
    trekkerIds: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Trekker',
      },
    ],
  },
  { timestamps: true }
);

module.exports = model('Booking', bookingSchema);
