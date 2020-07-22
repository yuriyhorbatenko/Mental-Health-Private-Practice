const path = require('path');
const router = require('express').Router();

//Define Routes
router.use('/users', require('./Users'));
router.use('/auth', require('./auth'));
router.use('/profile', require('./Profile'));
router.use('/booking', require('./Bookings'));

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;
