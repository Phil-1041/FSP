import React from 'react';
import { Link } from 'react-router-dom';
import GithubIcon from '../resources/github_icon';
import LinkedinIcon from '../resources/linkedin_icon';

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

    <div id="border-div"></div>
    
    <div id="fourth-item">
        <p>Hello {user.name},</p>
        <p className="welcome-message">thanks for visiting!</p>
        <br/>
        <p className="welcome-message">You can also checkout my Github or LinkedIn.</p>
        <br/>
        <div id="job-search-links">
          <div>

          <a
            href="https://github.com/Phil-1041"
            className="github"
            target="_blank"
            >
            <GithubIcon />
          </a>
          </div>
          <div>

          <a
              href="https://www.linkedin.com/in/phil-zheng-82a30751/"
              className="linkedin"
              target="_blank"
              >
            <LinkedinIcon />
          </a>
          </div>
        </div>
    </div>
{/* 
      <img
        src="https://movie-dev.s3-us-west-1.amazonaws.com/Phil_Zheng.jpg"
        alt="Photo of Phil Zheng"
      /> */}
      {/* <div className="icon-links">
        <a
          href="https://github.com/Phil-1041"
          className="github"
          target="_blank"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/phil-zheng-82a30751/"
          className="linkedin"
          target="_blank"
        >
          <LinkedinIcon />
        </a>
      </div> */}
      {/* <a href="">Porfolio</a> */}
   
  </div>
)

export default LeftNav