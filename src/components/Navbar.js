import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button, Dropdown, Menu } from 'semantic-ui-react';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import MovieActions from '../actions/MovieActions';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserStore.getUser()
    }
    this._login = this._login.bind(this);
    this._signUp = this._signUp.bind(this);
    this._homePage = this._homePage.bind(this);
    this._onchange = this._onchange.bind(this);
    this._logout = this._logout.bind(this);
    this._getFavoriteMovies = this._getFavoriteMovies.bind(this);
  }

  componentDidMount() {
    UserStore.startListening(this._onchange);
  }

  componentWillUnmount() {
    UserStore.stopListening(this._onchange);
  }

  _onchange() {
    this.setState({
      user: UserStore.getUser()
    });
  }

  _login() {
    browserHistory.push({ pathname: '/login' });
  }

  _logout() {
    UserActions.logout();
  }

  _signUp() {
    browserHistory.push({ pathname: '/register' });
  }

  _homePage() {
    browserHistory.push({pathname: '/'})
  }

  _getFavoriteMovies(username) {
    MovieActions.getFavoriteMovies(username);
  }

  render() {
    var { user } = this.state;
    if(!user){
      return (
        <div className="navBar">
          <Menu size='huge'>
            <Menu.Item name='MOVIE APP' onClick = {e=>this._homePage()}>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Button onClick={e=>this._login()}>Log-in</Button>
              </Menu.Item>
              <Menu.Item>
                <Button primary onClick={e=>this._signUp()}>Sign Up</Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
      )
    }else{
      return (
        <div className="navBar">
          <Menu size='huge'>
            <Menu.Item name='MOVIE APP' onClick= {e=>this._homePage()}>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item name='Welcome'> Welcome {user.username}!
              </Menu.Item>
              <Menu.Item>
                <Button color='olive' onClick={e=>this._logout()}>Logout</Button>
              </Menu.Item>
              <Menu.Item>
                <Button color='pink' onClick={e=>this._getFavoriteMovies(user.username)}>Favorite</Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
      )
    }
  }
};
