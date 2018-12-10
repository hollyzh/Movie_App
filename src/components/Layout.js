import React, { Component } from 'react';
import { Link } from 'react-router';

import MovieList from './MovieList';
import FavoriteMovies from './FavoriteMovies';
import Navbar from './Navbar';
import '../css/style.sass';


export default class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        {/* <MovieList /> */}
        {/* <FavoriteMovies /> */}
      </div>
    )
  }
};
