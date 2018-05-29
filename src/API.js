import ServerActions from './actions/ServerActions';
import axios from 'axios';
//import dotenv from 'dotenv';

//dotenv.config();

const API = {
  searchOneMovie(movieKeyword) {
      axios.get(`http://www.omdbapi.com/?apikey=16db55dc&t=${movieKeyword}`, pokemon => {
        ServerActions.receiveMovies(movies);
      })
  }
}

export default API;
