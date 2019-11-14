import React from 'react';

class Home extends React.Component {

  render(){
    return (  
        <div id="home">
            
          <h1>{this.props.users.name}</h1>
          <h2>this is Home</h2>
          <button id="logout" onClick={this.props.logout}> Logout </button>
          <video src="https://movie-dev.s3-us-west-1.amazonaws.com/VDKc8WRABx71t4QEtVSopr5C" controls></video>
        </div>
    )
  }
} 

export default Home;