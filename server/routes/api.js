const express = require('express');

const router = new express.Router();

router.use('/user', require('./user'));
router.use('/movies', require('./movies'));

module.exports = router;
