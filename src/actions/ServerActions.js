import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveMovies(movies) {
    AppDispatcher.dispatch({
      type:'RECEIVE_MOVIES',
      payload: {movies}
    })
  }

}

export default ServerActions;
