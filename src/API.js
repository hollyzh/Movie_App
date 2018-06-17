import ServerActions from './actions/ServerActions';
import $ from 'jquery';
import axios from 'axios';
import UserActions from './actions/UserActions';
// import RouteActions from './actions/RouteActions';
//import dotenv from 'dotenv';

//dotenv.config();

const API = {
  searchMovies(movieKeyword) {
    $.get(`http://www.omdbapi.com/?apikey=16db55dc&s=${movieKeyword}`, movies => {
      ServerActions.receiveMovies(movies);
    })
  },
  searchOneMovie(id) {
    $.get(`http://www.omdbapi.com/?apikey=16db55dc&i=${id}`, movie => {
      console.log('movie:', movie)
      // ServerActions.receiveMovies(movie);
    })
  },
  login(userInfo) {
    axios.post('/api/user/login', userInfo)
      .then(() => {
       UserActions.getUsers()
      })
      .catch(console.error)
  },
  getUsers() {
    axios.get('/api/user/manage')
      .then(res => res.data)
      .then(ServerActions.receiveUsers)
      .catch(console.error)
  },
  logout() {
    axios.post('/api/user/logout')
      .then(ServerActions.removeUsers)
      .catch(console.error)
  },
  register(user) {
    axios.post('/api/user/register', user)
      .then(res => {
        // RouteActions.route('/login');
        console.log("res:", res)
      })
      .catch(console.error)
  },
}

export default API;
