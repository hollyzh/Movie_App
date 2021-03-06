const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  favoriteMovie: [],
  ownerUsername: {type: String, require:true }
});


movieSchema.statics.saveMovie = function(movieObj, cb) {
  var {favoriteMovie, ownerUsername} = movieObj;
  this.findOne({ownerUsername: ownerUsername}, (err, dbMovie) => {
    if(err) return cb(err);
    if(!dbMovie) {
      this.create(movieObj, (err) => {
        if(err) return cb(err);
      });
    } else {
      var favoriteMovies = dbMovie.favoriteMovie;
      var idArr = [];
      favoriteMovies.map(fm => {
        var id = fm.imdbID;
        idArr.push(id);
      })
      var movieId = favoriteMovie.imdbID;
      if(idArr.indexOf(movieId) == -1){
        favoriteMovies.push(favoriteMovie);
        this.update({ownerUsername: ownerUsername},{$set: { favoriteMovie: favoriteMovies}},(err)=>{
          if(err) return cb(err);
        });
      }
    }
  });
};

movieSchema.statics.deleteMovies = function(movieObj, cb) {
  var {id, ownerUsername} = movieObj;
  this.findOne({ownerUsername: ownerUsername}, (err, dbMovie) => {
    if(err) return cb(err);
    if(dbMovie) {
      var favoriteMovies = dbMovie.favoriteMovie;
      var newfavoriteMovies = favoriteMovies.filter(fm => fm.imdbID !== id);
      this.update({ownerUsername: ownerUsername}, {$set: {favoriteMovie: newfavoriteMovies}}, (err) => {
        if(err) return cb(err);
      })
    }
  });
};


const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
