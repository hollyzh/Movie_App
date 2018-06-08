import ServerActions from './actions/ServerActions';
import $ from 'jquery';
import axios from 'axios';
//import dotenv from 'dotenv';

//dotenv.config();

const API = {
  searchOneMovie(movieKeyword) {
    $.get(`http://www.omdbapi.com/?apikey=16db55dc&t=${movieKeyword}`, movies => {
      ServerActions.receiveMovies(movies);
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
  }
}

export default API;
