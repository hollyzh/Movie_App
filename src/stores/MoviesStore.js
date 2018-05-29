import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';

var _movies = null;

class MoviesStore extends EventEmitter {
  constructor(props) {
    super(props);
    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_MOVIES':
          _movies = action.payload.movies;
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

}

export default new MoviesStore();
