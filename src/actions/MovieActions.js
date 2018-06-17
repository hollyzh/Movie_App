import API from '../API';

const MovieActions = {
  searchMovies(movieKeyword) {
    API.searchMovies(movieKeyword);
  },
  searchOneMovie(id) {
    API.searchOneMovie(id);
  }
}

export default MovieActions;
