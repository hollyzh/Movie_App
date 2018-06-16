import React, { Component } from 'react';
import UserStore from '../stores/UserStore';


export default class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserStore.getUser()
    };
    this._onchange = this._onchange.bind(this);
  }

  componentWillMount() {
    UserStore.startListening(this._onchange);
  }

  componentWillUnmount() {
    UserStore.stopListening(this._onchange);
  }

  _onchange() {
    this.setState({
      user: UserStore.getUser()
    })
  }

  render() {
    var {user} = this.state;
    if(!user) {
      return <p className="navbar-text"></p>
    }

    return (
      <p className="navbar-text">Welcome {user.username}!</p>
    )
  }
};
