import React, { Component } from 'react';
import UserActions from '../actions/UserActions';


export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this._submit = this._submit.bind(this);
  }

  _submit(e){
    e.preventDefault();
    UserActions.login(this.state);
  }

  render() {
    return(
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={this._submit}>
          <div className="form-group">
            <label htmlFor="username">
              Username:
            </label>
            <input type="text"
              className="form-control"
              placeholder="Username"
              required
              value={this.state.username}
              data-statekey="username"
              onChange={ e=> {this.setState({username: e.target.value}) }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password:
            </label>
            <input type="password"
              className="form-control"
              placeholder="Password"
              required
              value={this.state.password}
              data-statekey="password"
              onChange={ e=> {this.setState({password: e.target.value}) }}
            />
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
