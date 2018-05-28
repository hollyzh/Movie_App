const express = require('express');

const router = new express.Router();

const MovieInfo = require('../models/movieInfo');

router.route('/movies')
  .get((req, res) => {
    MovieInfo.getMovieInformation(req.query, res.handle);
   .then(moiveInfos => {
      res.send(moiveInfos);
   })
   .catch(err=>{
      res.status(400).send(err);
   })
 })

module.exports = router;
