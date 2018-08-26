import React, { Component } from 'react';
import { Link } from 'react-router';

import HomePage from './HomePage';
import MovieList from './MovieList';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import Personal from './Personal';
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
        {/* <RegisterForm /> */}
        {/* <LoginForm /> */}
        {/* <FavoriteMovies /> */}
      </div>
    )
  }
};
