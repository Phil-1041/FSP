import React from 'react';


class VideoShow extends React.Component {
  // debugger

  componentDidMount(){
    this.props.fetchVideo(this.props.videoId)
  }

  render() {
    let { video } = this.props
    if(!video) return null
    return (
      <div className="show-body">

        <div className="container">
          <div className="c-video">
            <video className="video" src={video.url} autoPlay controls></video>
            {/* <div className="player-controls">
              <div className="bar">
                <div className="juice"></div>
              </div>
              <div className="control-buttons">
                <button id="play-pause"></button> 
              </div>
            </div> */}
          </div>
        </div>

        // <script src="app/assets/javascripts/video_styles/main_player.js"></script>

        <div className="below-video">

          <div className="left-wrapper">

            <div className="video-info">

              <div className="top-section">
                <h1 className="title">{video.title}</h1>
                <p className="upload-date">{video.created_at}</p>
                <h1 className="owner">{video.owner}</h1>
              </div>

              <div className="bottom-section">
                Description
                <p className="video-description">{video.description}</p>
              </div>
                
            </div>

            <div className="comments-wrapper">
              Comments
            </div>
          </div>

          <div className="right-wrapper"> 
            <h1>OtherVids</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoShow