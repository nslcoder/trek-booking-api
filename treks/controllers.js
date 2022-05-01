const { fetchTreks, createTrek } = require('./services');

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

module.exports = {
  getTreks,
  postTrek,
};
