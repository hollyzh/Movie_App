import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import MovieDetail from './components/MovieDetail';
import MovieList from './components/MovieList';
import RegisterForm from './components/RegisterForm';

render(
  <Router history={browserHistory} >
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path='register' component={RegisterForm}></Route>
      <Route path='login' component={LoginForm}></Route>
      <Route path='movies' component={MovieList}></Route>
      <Route path='movieDetail' component={MovieDetail}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
