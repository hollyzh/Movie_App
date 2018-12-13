import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveMovies(movies) {
    AppDispatcher.dispatch({
      type:'RECEIVE_MOVIES',
      payload: {movies}
    })
  },
  receiveOneMovie(movie) {
    AppDispatcher.dispatch({
      type:'RECEIVE_ONE_MOVIE',
      payload: {movie}
    })
  },
  receiveFavoriteMovies(favoriteMovies) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_FAVORITE_MOVIES',
      payload: {favoriteMovies}
    })
  },
  receiveUsers(userInfo){
    AppDispatcher.dispatch({
      type:'RECEIVE_USERS',
      payload: {userInfo}
    })
  },
  removeUsers(userInfo){
    AppDispatcher.dispatch({
      type: 'REMOVE_USERS'
    })
  }
}

export default ServerActions;
