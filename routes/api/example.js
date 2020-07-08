const express = require('express');
const router = express.Router();

//@route    GET api/example
//@desc     Test route
//@access   Public
router.get('/', (req, res) => res.send('Example route'));

module.exports = router;
