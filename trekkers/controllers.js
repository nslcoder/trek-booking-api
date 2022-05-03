const { createTrekkers, addBookingToTrekker } = require('./services');

const postTrekkers = async (trekkers) => {
  try {
    return await createTrekkers(trekkers);
  } catch (error) {
    return error;
  }
};

const putBookingToTrekker = async (bookingId, trekkerIds) => {
  try {
    await addBookingToTrekker(bookingId, trekkerIds);
  } catch (error) {
    return error;
  }
};

module.exports = {
  postTrekkers,
  putBookingToTrekker,
};
