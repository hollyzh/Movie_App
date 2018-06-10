import React, {Component} from 'react';
import UserActions from '../actions/UserActions';

export default class RegisterForm extends Component {
  constructor(props){
    super(props);

    this.state = {
        username: '',
        password1: '',
        password2: ''
    }
    this._submit = this._submit.bind(this);
  }

  _submit(e) {
    e.preventDefault();
    var {username, password1, password2} = this.state;
    if(/.{6,}/.test(username) === false) {
      this.setState({username: ''});
      return alert("Username must be at least 6 characters long.");
    }
    if(/^(?![a-zA-Z]{8,10}$)(?![a-z0-9]{8,10}$)(?![0-9A-Z]{8,10}$)(?=.*[!@#\$%\^&\*])/.test(password1)===false){
      this.setState({
        password1: '',
        password2: ''
      });
      return alert("Password must be at least 8-10 characters, One captial letter, one lowercase letter, one digit, and one special sign.")
    }
    if(password1 !== password2){
      this.setState({
        password1: '',
        password2: ''
      });
      return alert("Password entered do not match. Please reenter.");
    }
    var user = {
      username,
      password: password1
    };
    UserActions.register(user);
  }

  render() {
    var { username, password1, password2 } = this.state;
    return (
      <div className="container">
        <form onSubmit={this._submit}>
          <div className="form-group">
            <label htmlFor="Username">Username: </label>
            <input type="text"
              className="form-control"
              placeholder="Username"
              required
              value={username}
              // onChange={this._onInputChange}
              onChange={e=>{this.setState({username: e.target.value})}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password: </label>
            <input type="password"
              className="form-control"
              placeholder="Password"
              required
              value={password1}
              onChange={e=>{this.setState({password1: e.target.value})}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password (verify): </label>
            <input type="password"
              className="form-control"
              placeholder="Password"
              required
              value={password2}
              onChange={e=>{this.setState({password2: e.target.value})}}
            />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}
