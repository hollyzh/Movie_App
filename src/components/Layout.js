import React, { Component } from 'react';
import { Link } from 'react-router';

import HomePage from './HomePage';
import MovieList from './MovieList';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

export default class Layout extends Component {


  render() {
    return (
      <div className="container">
        <HomePage />
        <MovieList />
        <RegisterForm />
        {/* <LoginForm /> */}
      </div>
    )
  }
};
