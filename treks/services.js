const Trek = require('./model');

const fetchTreks = async () => {
  try {
    return await Trek.find({});
  } catch (error) {
    return error;
  }
};

const createTrek = async (trekData) => {
  try {
    await Trek.create(trekData);
    return 'Trek is created';
  } catch (error) {
    return error;
  }
};

const findTrekPrice = async (trekId) => {
  try {
    const trek = await Trek.findById(trekId);
    return trek.price;
  } catch (error) {
    return error;
  }
};

module.exports = {
  fetchTreks,
  createTrek,
  findTrekPrice,
};
