import API from '../API';

const MovieActions = {
  searchMovies(movieKeyword) {
    API.searchMovies(movieKeyword);
  },
  searchOneMovie(id) {
    API.searchOneMovie(id);
  },
  saveMovie(movie, username, movieId) {
    API.saveMovie(movie, username, movieId);
  }
}

export default MovieActions;
