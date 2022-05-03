const { fetchTreks, createTrek, findTrekPrice } = require('./services');

const getTreks = async (req, res) => {
  try {
    const treks = await fetchTreks();
    res.status(200).send(treks);
  } catch (error) {
    res.send(error);
  }
};

const postTrek = async (req, res) => {
  try {
    const message = await createTrek(req.body);
    res.status(201).send(message);
  } catch (error) {
    res.send(error);
  }
};

const getTrekPrice = async (trekId) => {
  try {
    return await findTrekPrice(trekId);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getTreks,
  postTrek,
  getTrekPrice,
};
