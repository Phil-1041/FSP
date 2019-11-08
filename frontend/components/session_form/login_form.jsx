import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(this.props.history.push("/"));
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    };
  };

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
          <input id='email-login' type="submit" value='Log in with email' onClick={this.handleSubmit} />
          <p className='text'>or</p>
          <button id='demo-login'>Log in as Demo User</button>
          <div id='session-footer'>
            <span>Don't have an account?</span>{this.props.otherForm}
          </div>
        </form>
      </div>
    )
  }


}

export default LoginForm;