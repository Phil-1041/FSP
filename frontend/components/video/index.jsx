import React from 'react';

class Show extends React.Component {

  componentDidMount(){
    this.props.fetchVideos()
  }


  render(){
    const {videos} = this.props
    if (!videos) return null //loading ICON later
    return (
      <div>
        <h1>A video</h1>
        {
          videos.map( video => (
            <video width="500" height="400" autoPlay muted>
              <source src={video.url} type="video/mp4"></source>
            </video>
            )
          )
        }
      </div>
    )
  }
}

export default Show