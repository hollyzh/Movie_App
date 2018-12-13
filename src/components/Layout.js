import React, { Component } from 'react';
import { Link } from 'react-router';

import Navbar from './Navbar';
import '../css/style.sass';


export default class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
};
