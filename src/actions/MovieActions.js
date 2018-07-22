import API from '../API';

const MovieActions = {
  searchMovies(movieKeyword) {
    API.searchMovies(movieKeyword);
  },
  searchOneMovie(id) {
    API.searchOneMovie(id);
  },
  saveMovie(movie, username) {
    API.saveMovie(movie, username);
  },
  getFavoriteMovies(username) {
    API.getFavoriteMovies(username);
  },
  removeMovie(imdbID, username){
    API.removeMovie(imdbID, username);
  }
}

export default MovieActions;
