import React from 'react';
import { withRouter } from 'react-router-dom';

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
      .then(() => this.props.closeModal())
      .then(() => this.props.history.push('/home'));
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

  errors() {
    const errors = this.props.errors.map((error, idx) => (
      <li key={idx} className={idx} >{error}</li>)
    )
    if (this.props.errors.length > 0) {
      return (
        <ul className="errors">
          {errors}
        </ul>
      )
    }
  }

  render() {
    return (
      <div>
        <p id='session-title'>Join Movie</p>

        <form className="session_form">
          <input type="text" value={this.state.name} placeholder="First and last name" onChange={this.handleInput('name')} />
          <input type="text" value={this.state.email} placeholder="Email adress" onChange={this.handleInput('email')} />
          <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleInput('password')} />
          <p className='text'>Forgot your password?</p>

          {this.errors()}

          <button className='submit-form' type="submit" onClick={this.handleSubmit}>
            Join with email
          </button>
          <p className='text'>or</p>
          <button id='demo-login'>Log in as Demo User</button>
          <div id='session-footer'>
            <span>Already have an account?</span> 
            <button id='other-form-link' onClick={this.fadeoutSignup}>
              Log in
            </button>
          </div>
        </form>
      </div>
    )
  }


}

export default withRouter(SignupForm);