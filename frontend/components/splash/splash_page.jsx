import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
    this.slideVideo = this.slideVideo.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', EventDown) //initial state

    function EventDown() {
      let latestKnownScrollY = window.scrollY
      // console.log(latestKnownScrollY) // debug remove
      if (latestKnownScrollY > 700) {
        window.removeEventListener('scroll', EventDown) //removes event listener
        slideVideoDown() //slides video down
        addEventUp() //adds event for up
      }
    }

    function slideVideoDown() {
      document.getElementById('video-wrapper-before').id = 'video-wrapper-after'
    }

    function addEventUp() {
      let video = document.getElementById('video-wrapper');
      window.addEventListener('scroll', EventUp)
    }

    function EventUp() {
      let latestKnownScrollY = window.scrollY
      // console.log(latestKnownScrollY)
      if (latestKnownScrollY < 500) {
        window.removeEventListener('scroll', EventUp) //removes event listener
        slideVideoUp() //slides video up
        addEventDown() //adds event for down
      }
    }

    function slideVideoUp() {
      document.getElementById('video-wrapper-after').id = 'video-wrapper-before'
    }

    function addEventDown() {
      let video = document.getElementById('video-wrapper');
      window.addEventListener('scroll', EventDown)
    }
  }

  slideVideo(){
    console.log(window.scrollY)
  }

  render(){
    return (
      <div id='base'>
        <div id="title">
          <h1>Phil can help.*</h1>
          <h3>*with website design, website development and website everything else.</h3>
        </div>
        <div id="front_buttons">
          <Link to='/linkedin'>
            <button id="linkedin_splash">My Linkedin</button>
          </Link>
          <button id="portfolio_splash">See portfolio</button>
        </div>

        <div id="video-wrapper-before" >
          <video id="splash-video" onScroll={() => this.slideVideo()} 
            src="https://movie-dev.s3-us-west-1.amazonaws.com/Drone+Winter+Mountains+4K.mp4" type="video/mp4" loop autoPlay muted></video>
        </div>
        
        <img src="https://f.vimeocdn.com/images_v6/lohp/featured-videos/288589686/texture0.jpg"/>

        <span id="viewsection">
          <div className="content-container">
            
            <div>
              <h2>Your video.</h2>
              <h2>Your brand.</h2>
            </div>
            <div className ="inner-container">
              <p>
                The world's fastest, most customizable, easily embeddable ad-free player.
              </p>
              <Link to="/">Learn more &#8594;</Link>
            </div>

            <div>  </div>
          
          </div>
          <p>Plans with custom players from <b>$7</b>.</p>
          <button> Compare plans </button>
        </span>
      </div>
    )
  }
}

export default Splash;
