import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';

var _movies = null;
var _movie = null;
var _favoriteMovies = null;

class MoviesStore extends EventEmitter {
  constructor(props) {
    super(props);
    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_MOVIES':
          _movies = action.payload.movies;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ONE_MOVIE':
          _movie = action.payload.movie;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_FAVORITE_MOVIES':
          _favoriteMovies = action.payload.favoriteMovies;
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getMovies() {
    return _movies;
  }

  getOneMovie() {
    return _movie;
  }

  getFavoriteMovies() {
    return _favoriteMovies;
  }

}

export default new MoviesStore();
