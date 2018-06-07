import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path='login' component={LoginForm}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
