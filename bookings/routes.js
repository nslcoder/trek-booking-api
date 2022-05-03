const router = require('express').Router();

const { postBooking } = require('./controllers');

router.post('/', postBooking);

module.exports = router;
