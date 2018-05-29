import API from '../API';

const MovieActions = {
  searchOneMovie(movieKeyword) {
    API.searchOneMovie(movieKeyword);
  }
}

export default MovieActions;
