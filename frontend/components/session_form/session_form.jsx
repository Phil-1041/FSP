import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.whatform = this.whatform.bind(this);
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

  whatform() {
    if (this.props.formType === 'login') {
      return 'Log in to Movie'
    } else {
      return 'Join Movie'
    }
  }

  whatFooter() {
    if (this.props.formType === 'login') {
      return 'Don\'t have an account?'
    } else {
      return 'Already have an account?'
    }
  }

  whatButton(){
    if (this.props.formType === 'login') {
      return 'Log in with email'
    } else {
      return 'Join with email'
    }
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
        <p id='session-title'>{this.whatform()}</p>

        {/* <ul className="errors">{errors}
        </ul> */}

        <form className="session_form">
          <input type="text" value={this.state.name} onChange={this.handleInput('name')} />
          <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
          <p className='text'>Forgot your password?</p>
          <input id='email-login' type="submit" value={this.whatButton()} onClick={this.handleSubmit} />
          <p className='text'>or</p>
          <button id='demo-login'>Log in as Demo User</button>
          <div id='session-footer'>
            <span>{this.whatFooter()}</span>{this.props.otherForm}
          </div>
        </form>
      </div>
    )
  }


}

export default SessionForm;