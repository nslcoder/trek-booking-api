const { Schema, model } = require('mongoose');

const trekkerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    bookingIds: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Booking',
      },
    ],
  },
  { timestamps: true }
);

module.exports = model('Trekker', trekkerSchema);
