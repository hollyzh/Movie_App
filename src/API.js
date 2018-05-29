import ServerActions from './actions/ServerActions';
import $ from 'jquery';
//import dotenv from 'dotenv';

//dotenv.config();

const API = {
  searchOneMovie(movieKeyword) {
      $.get(`http://www.omdbapi.com/?apikey=16db55dc&t=${movieKeyword}`, movies => {
        ServerActions.receiveMovies(movies);
      })
  }
}

export default API;
