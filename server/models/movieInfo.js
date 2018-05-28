const axios = require('axios');
require('dotenv').config();

exports.getMovieInformation = (query, cb) => {
  axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API}&t=${movieKeyWords}`)
    .then(res => cb(null, res.data))
    .catch(process.stderr.write);
};
