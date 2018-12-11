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
      <div className="container registerContainer">
        <h2>Sign Up</h2>
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
                  data-toggle="tooltip"
                  title="Hooray!"
                  required
                  value={username}
                  onChange={e=>{this.setState({username: e.target.value})}}
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
                  title="At least 8-10 characters, One captial letter, one lowercase letter, one digit, and one special sign."
                  required
                  value={password1}
                  onChange={e=>{this.setState({password1: e.target.value})}}
                />
                <i aria-hidden='true' className='key icon' />
              </div>
            </div>
          </div>
          <div className="field pwdInput">
            <label htmlFor="password">
              Password(verify):
            </label>
            <div className='ui right corner labeled input huge'>
              <div className='ui label label right corner'>
                <i aria-hidden='true' className='asterisk icon' />
              </div>
              <div className='ui left icon input'>
                <input type='password'
                  placeholder='Password(verify)'
                  required
                  value={password2}
                  onChange={e=>{this.setState({password2: e.target.value})}}
                />
                <i aria-hidden='true' className='key icon' />
              </div>
            </div>
          </div>
          <div className='text-center'>
            <button type='submit' className='ui teal big button' role='button'>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
