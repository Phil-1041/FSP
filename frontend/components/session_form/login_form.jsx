import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.fadeoutLogin = this.fadeoutLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.loginUser(user)
      .then(() => this.props.closeModal())
      .then(() => this.props.history.push('/home'))
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    };
  };

  componentDidMount() {
    $('.modal-login').fadeIn(258)
  }

  fadeoutLogin() {
    $('.modal-login').fadeOut(256, () => this.props.openModal())
  }

  errors(){
    const errors = this.props.errors.map((error, idx) => (
      <li key={idx} className={idx} >{error}</li>)
    )
    if(this.props.errors.length > 0){
      return(
        <ul className="errors">
          {errors}
        </ul>
      )
    }
  }

  render() {

    return (
      <div>
        <p id='session-title'>Log in to Movie</p>

        <form className="session_form">
          <input type="text" value={this.state.email} placeholder='Email address' onChange={this.handleInput('email')} />
          <input type="password" value={this.state.password} placeholder='Password' onChange={this.handleInput('password')} />
          <p className='text'>Forgot your password?</p>

          {this.errors()}

          <button className='submit-form' type="submit" onClick={this.handleSubmit}>
            Log in with email
          </button>
          <p className='text'>or</p>
          <button id='demo-login'>Log in as Demo User</button>
          <div id='session-footer'>
            <span>Don't have an account?</span>
            <button id='other-form-link' onClick={this.fadeoutLogin}>
              Join
            </button>
          </div>
        </form>
      </div>
    )
  }


}

export default withRouter(LoginForm);