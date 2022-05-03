const Trekker = require('./model');

const createTrekkers = async (trekkers) => {
  try {
    return await Promise.all(
      trekkers.map(async (trekker) => {
        const hasTrekker = await Trekker.find({ email: trekker.email });
        if (hasTrekker.length !== 0) {
          return hasTrekker[0]._id.valueOf();
        } else {
          const newTrekker = await Trekker.create(trekker);
          return newTrekker._id.valueOf();
        }
      })
    );
  } catch (error) {
    return error;
  }
};

const addBookingToTrekker = (bookingId, trekkerIds) => {
  try {
    trekkerIds.forEach(async (trekkerId) => {
      const trekker = await Trekker.findById(trekkerId);
      trekker.bookingIds.push(bookingId);
      trekker.save();
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  createTrekkers,
  addBookingToTrekker,
};
