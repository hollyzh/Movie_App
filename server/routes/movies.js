const express = require('express');

const router = new express.Router();

const Movie = require('../models/Movie');

router.post('/saveMovie',(req, res) => {
  Movie.saveMovie(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});


module.exports = router;
