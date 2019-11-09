import React from 'react';

class Home extends React.Component {

  render(){
    return (
      <div>
      <h1>{this.props.users.name}</h1>
      <h2>this is Home</h2>
      <button onClick={this.props.logout}> Logout </button>
      </div>
    )
  }
} 

export default Home;