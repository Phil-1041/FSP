import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'DemoUser',
      password: 'movieo'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.fadeoutLogin = this.fadeoutLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // debugger
    this.props.loginUser(user)
      .then(() => this.props.history.push('/log_in'));
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

  // errors(){
  //     // debugger
  //     this.props.errors.map((error) => (
  //         <li>{error[0]}</li>
  //     )) 
  // }

  render() {
    // const errors = this.props.errors.map((error, idx) => (
    //   <li key={idx} >{error}</li>
    // ))
    return (
      <div>
        <p id='session-title'>Log in to Movie</p>

        {/* <ul className="errors">{errors}
        </ul> */}

        <form className="session_form">
          <input type="text" value={this.state.name} onChange={this.handleInput('name')} />
          <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
          <p className='text'>Forgot your password?</p>
          <input className='submit-form' type="submit" value='Log in with email' onClick={this.handleSubmit} />
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