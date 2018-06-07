import React, { Component } from 'react';
import { Link } from 'react-router';

import HomePage from './HomePage';
import MovieList from './MovieList';
import LoginForm from './LoginForm';

export default class Layout extends Component {


  render() {
    return (
      <div className="container">
        <HomePage />
        <MovieList />
        <LoginForm />
      </div>
    )
  }
};
