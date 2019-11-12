import React from 'react';

class Show extends React.Component {

  componentDidMount(){
    this.props.fetchVideos()
  }


  render(){
    const {videos} = this.props
    if (!videos) return null //loading ICON later
    debugger
    return (
      <div>
        <h1>A video</h1>
        {
          videos.map( video => (
            <video src={video.url}></video>
            )
          )
        }
      </div>
    )
  }
}

export default Show