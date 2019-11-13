import React from 'react';


class VideoShow extends React.Component {
  // debugger

  componentDidMount(){
    this.props.fetchVideo()
  }

  render() {
    let {videoID, video} = this.props
    if(!video) return null
    return (
      <div>
        <h1>{video.title}</h1>
        <video id="main-video" src={video.url} autoPlay controls></video>
      </div>
    )
  }
}

export default VideoShow