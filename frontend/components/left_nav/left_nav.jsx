import React from 'react';
import { Link } from 'react-router-dom';

const LeftNav = ({ user }) => (
  <div id="left-nav">
   
    <div id="first-item">
      <Link to='/upload'> 
        <img src="https://movie-dev.s3-us-west-1.amazonaws.com/white-plus.png" alt="plus-video"/>
      New video</Link> 
    </div>

    <div id="second-item">
      <Link to="/home">
        <img src="https://movie-dev.s3-us-west-1.amazonaws.com/home.png" alt="home-icon"/>
        Home
      </Link>
      <Link to="/home">
        <img src="https://movie-dev.s3-us-west-1.amazonaws.com/youtube.png" alt="video-icon"/>
        Videos
      </Link>
      <Link to="/home">
        <img src="https://movie-dev.s3-us-west-1.amazonaws.com/video-call.png" alt="record-icon"/>
        Live events
      </Link>
      <Link to="/home">
        <img src="https://movie-dev.s3-us-west-1.amazonaws.com/chat.png" alt="showcase-icon"/>
        Showcases
      </Link>
    </div>

    <div id="third-item-container">
      <div id="third-item">
        <h3>Vimeo Pro</h3>
        <p>Powerful privacy options and analytics</p>
        <button>Upgrade</button>
      </div>
    </div>

    <div id="fourth-item">
      <p>Greetings {user.name}</p>
    </div>
   
  </div>
)

export default LeftNav