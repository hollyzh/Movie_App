const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  favoriteMovie: [],
  ownerUsername:{type: String, require:true },
  // owners: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
});


movieSchema.statics.saveMovie = function(movieObj, cb) {
  this.findOne({ownerUsername: movieObj.username}, (err, dbUser) => {
    if(err) return cb(err);
    if(!dbUser) {
      mongoose.model('Movie').
      create({favoriteMovie:movieObj.movie, ownerUsername: movieObj.username}, function(err){
        if(err) return cb(err);
      });
    } else {
      var favoriteMovies = dbUser.favoriteMovie;
      favoriteMovies.map(fm => {
        var id = fm.imdbID;
        if(id === movieObj.movieId) {
          // return cb({error: 'Already save it.'});
        }
      })

    }
  });
};



const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
