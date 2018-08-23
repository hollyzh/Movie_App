import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button, Dropdown, Menu } from 'semantic-ui-react';


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this._login = this._login.bind(this);
    this._signUp = this._signUp.bind(this);
    this._homePage = this._homePage.bind(this);
  }

  _login() {
    browserHistory.push({ pathname: '/login' });
  }

  _signUp() {
    browserHistory.push({ pathname: '/register' });
  }

  _homePage() {
    browserHistory.push({pathname: '/'})
  }

  render() {
    return (
      <div className="navBar">
        <Menu size='huge'>
          <Menu.Item name='MOVIE APP' onClick= {e=>this._homePage()}>
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
  }
};
