const Booking = require('./model');

const createBooking = async ({
  trekkersCount,
  trekkerIds,
  trekId,
  price,
  departureDate,
  paymentPart,
}) => {
  try {
    const totalValue = price * trekkersCount;
    let paidAmount;
    paymentPart === 'full'
      ? (paidAmount = totalValue)
      : (paidAmount = totalValue * 0.3);

    const booking = await Booking.create({
      trekkersCount,
      trekId,
      departureDate,
      paymentPart,
      paidAmount,
      totalValue,
      trekkerIds,
    });

    return {
      bookingId: booking._id.valueOf(),
      message: 'Booking is created',
    };
  } catch (error) {
    return error;
  }
};

module.exports = {
  createBooking,
};
