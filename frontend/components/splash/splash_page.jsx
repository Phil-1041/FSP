import React from 'react';

class Splash extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return (
      <div id='base'>
        <div id="title">
          <h1>Phil can help.*</h1>
          <h3>*with website design, website development and website everything else.</h3>
        </div>
        <div id="front_buttons">
          <button id="linkedin_splash">My Linkedin</button>
          <button id="portfolio_splash">See portfolio</button>
        </div>

        <div id="center_main" >
          <img src="https://f.vimeocdn.com/images_v6/lohp/featured-videos/288589686/texture0.jpg"/>
          {/* <video src="" type=""></video> */}
        </div>

      </div>
    )
  }
}

export default Splash;
