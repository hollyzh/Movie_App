import ServerActions from './actions/ServerActions';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API = {
  searchOneMovie(movieKeyword) {
      axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API}&t=${movieKeyWords}`, pokemon => {
        ServerActions.receiveMovies(movieKeyword);
      })
  }
}

export default API;
