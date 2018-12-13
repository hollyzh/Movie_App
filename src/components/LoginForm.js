import React, { Component } from 'react';
import UserActions from '../actions/UserActions';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: ''
    }
    this._submit = this._submit.bind(this);
  }

  _submit(e){
    e.preventDefault();
    UserActions.login(this.state);
    axios.post('/api/user/login', this.state)
    .then(res => res.data)
    .then(data => {
      this.setState({
        message: data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
    setTimeout(() => {
       browserHistory.push({pathname: '/'});
    }, 1000);
  }

  render() {
    var {message} = this.state;
    return(
      <div className="container loginContainer">
        <h2>Login</h2>
        <p>{message}</p>
        <form className='ui form' onSubmit={this._submit}>
          <div className="field">
            <label htmlFor="username">
              Username:
            </label>
            <div className='ui right corner labeled input huge'>
              <div className='ui label label right corner'>
                <i aria-hidden='true' className='asterisk icon' />
              </div>
              <div className='ui left icon input'>
                <input type='text'
                  placeholder='Username'
                  required
                  value={this.state.username}
                  onChange={ e=> {this.setState({username: e.target.value}) }}
                />
                <i aria-hidden='true' className='user icon' />
              </div>
            </div>
          </div>
          <div className="field pwdInput">
            <label htmlFor="password">
              Password:
            </label>
            <div className='ui right corner labeled input huge'>
              <div className='ui label label right corner'>
                <i aria-hidden='true' className='asterisk icon' />
              </div>
              <div className='ui left icon input'>
                <input type='password'
                  placeholder='Password'
                  required
                  value={this.state.password}
                  onChange={ e=> {this.setState({password: e.target.value}) }}
                />
                <i aria-hidden='true' className='key icon' />
              </div>
            </div>
          </div>
          <div className='text-center'>
            <button type='submit' className='ui positive big button' role='button'>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
