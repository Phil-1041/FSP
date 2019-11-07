import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: "",
  //     password: ""
  //   };
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.handleInput = this.handleInput.bind(this);
  //   this.whatform = this.whatform.bind(this);
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const user = Object.assign({}, this.state);
  //   this.props.processForm(user)
  //     .then(this.props.history.push("/"));
  // }

  // handleInput(type) {
  //   return (e) => {
  //     this.setState({ [type]: e.target.value })
  //   };
  // };

  // whatform() {
  //   if (this.props.formType === 'login') {
  //     return 'Login'
  //   } else {
  //     return 'Sign Up'
  //   }
  // }

  // whatLink() {
  //   if (this.props.formType === 'login') {
  //     return <Link to="./signup">Sign Up</Link>
  //   } else {
  //     return <Link to="./login">Log In</Link>
  //   }
  // }

  // // errors(){
  // //     // debugger
  // //     this.props.errors.map((error) => (
  // //         <li>{error[0]}</li>
  // //     )) 
  // // }

  render() {
  //   const errors = this.props.errors.map((error, idx) => (
  //     <li key={idx} >{error}</li>
  //   ))
    return (
  //     <div>
  //       <h1>{this.whatform()}</h1>
  //       <p>{this.whatLink()}</p>

  //       <ul className="errors">{errors}
  //       </ul>

  //       <form className="session_form">
  //         <label>Username:
  //                       <input type="text" value={this.state.username}
  //             onChange={this.handleInput('username')} />
  //         </label>
  //         <label>Password:
  //                       <input type="password" value={this.state.password}
  //             onChange={this.handleInput('password')} />
  //         </label>
  //         <input type="submit" value={this.whatform()} onClick={this.handleSubmit} />
  //       </form>
  //     </div>
      <h1>Something here</h1>
    )
  }


}

export default SessionForm;