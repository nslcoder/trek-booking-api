const { Schema, model } = require('mongoose');

const trekSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    days: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model('Trek', trekSchema);
