import React, { Component } from 'react';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import MovieActions from '../actions/MovieActions';


export default class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserStore.getUser()
    };
    this._onchange = this._onchange.bind(this);
    this._logout = this._logout.bind(this);
    this._getFavoriteMovies = this._getFavoriteMovies.bind(this);
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

  _logout() {
    UserActions.logout();
  }

  _getFavoriteMovies(username) {
    MovieActions.getFavoriteMovies(username);
  }

  render() {
    var {user} = this.state;
    if(!user) {
      return <p className="navbar-text"></p>
    }

    return (
      <div>
        <p className="navbar-text">Welcome {user.username}!</p>
        <p><a onClick={this._logout} style={{cursor:'pointer'}}>Logout</a></p>
        <p><a onClick={()=>this._getFavoriteMovies(user.username)} style={{cursor:'pointer'}}>Favorite</a></p>
      </div>
    )
  }
};
