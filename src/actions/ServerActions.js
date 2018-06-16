import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveMovies(movies) {
    AppDispatcher.dispatch({
      type:'RECEIVE_MOVIES',
      payload: {movies}
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
