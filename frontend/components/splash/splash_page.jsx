import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
    this.slideVideo = this.slideVideo.bind(this);
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

        <div id="video-wrapper" >
          <video onScroll={() => this.slideVideo()} id="splash-video" src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--466ca1b34cfd1bcdd2cc59f355310d7d5b0cd095/mountain.mp4" type="video/mp4" loop autoPlay muted></video>
        </div>
        
        <img src="https://f.vimeocdn.com/images_v6/lohp/featured-videos/288589686/texture0.jpg"/>

      </div>
    )
  }
}

export default Splash;
