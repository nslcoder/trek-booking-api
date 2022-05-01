const { connect } = require('mongoose');

module.exports = async () => {
  await connect(process.env.DB_URL);
  console.log('Database is connected');
};
