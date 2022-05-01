const router = require('express').Router();

const { getTreks, postTrek } = require('./controllers');

router.get('/', getTreks);
router.post('/', postTrek);

module.exports = router;
