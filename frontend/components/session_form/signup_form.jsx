import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.fadeoutSignup = this.fadeoutSignup.bind(this);
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

  componentDidMount(){
    $('.modal-signup').fadeIn(258)
  }

  fadeoutSignup() {
    $('.modal-signup').fadeOut(256, () => this.props.openModal())
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
        <p id='session-title'>Join Movie</p>

        {/* <ul className="errors">{errors}
        </ul> */}

        <form className="session_form">
          <input type="text" value={this.state.name} onChange={this.handleInput('name')} />
          <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
          <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
          <p className='text'>Forgot your password?</p>
          <input className='submit-form' type="submit" value='Join with email' onClick={this.handleSubmit} />
          <p className='text'>or</p>
          <button id='demo-login'>Log in as Demo User</button>
          <div id='session-footer'>
            <span>Already have an account?</span> <button id='other-form-link' onClick={this.fadeoutSignup}>
              Log in
            </button>
          </div>
        </form>
      </div>
    )
  }


}

export default SignupForm;