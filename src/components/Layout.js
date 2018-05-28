import React, { Component } from 'react';
import { Link } from 'react-router';

import HomePage from './HomePage';


export default class Layout extends Component {


  render() {
    return (
      <div className="container">
        <HomePage />
      </div>
    )
  }
};
