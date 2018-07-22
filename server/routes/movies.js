const express = require('express');

const router = new express.Router();

const Movie = require('../models/Movie');

router.post('/saveMovie',(req, res) => {
  Movie.saveMovie(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});


router.get('/favoriteMovies', (req, res) => {
  var queryObj = req.query;
  var queryArr = Object.getOwnPropertyNames(queryObj);
  var username = queryArr[0];
  Movie.findOne({ownerUsername: username}, (err, favoriteMovies) => {
    if(err) {
      return res.status(400).send(err);
    }else{
      return res.send(favoriteMovies);
    }
  });
});

router.post('/deleteMovies',(req, res) => {
  Movie.deleteMovies(req.body, (err, favoriteMovies) => {
      res.status(err ? 400 : 200).send(err);
  });
});



module.exports = router;
