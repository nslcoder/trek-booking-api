const {
  postTrekkers,
  putBookingToTrekker,
} = require('../trekkers/controllers');
const { createBooking } = require('./services');
const { getTrekPrice } = require('../treks/controllers');

const postBooking = async (req, res) => {
  try {
    const { trekkersCount, trekkers, trekId, departureDate, paymentPart } =
      req.body;

    const trekkerIds = await postTrekkers(trekkers);
    const price = await getTrekPrice(trekId);
    const { bookingId, message } = await createBooking({
      trekkersCount,
      trekkerIds,
      trekId,
      price,
      departureDate,
      paymentPart,
    });
    await putBookingToTrekker(bookingId, trekkerIds);

    res.status(201).send(message);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  postBooking,
};
