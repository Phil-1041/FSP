import React from 'react';
import { Link } from 'react-router-dom';
import LeftNav from '../left_nav/left_nav';

class Home extends React.Component {

  componentDidMount(){
    this.props.fetchVideos()
  }

  render(){
    let { user, videos } = this.props
    if(!videos) return null
    const vidArray = Object.values(videos)

    return (  
      <div>
        <LeftNav user={user}/>
      <div id="home">

        <div>
          <h1 id="index-title-home">Home</h1>

          <h3 className="section-heading">Recent Videos</h3>
          <div className='video-index-body'>

            <ul className="video-list-container">

              {
                vidArray.map(video => (
                <li className="video-index-item" key={video.id}>
                  <Link to={`/video/${video.id}`}>
                    <video className="video-item" src={video.url} />
                    <p className="video-index-title">{video.title}</p>
                    {/* <p>{video.uploader}</p> */}
                  </Link>
                </li>
                ))
              }

            </ul>
            {/* <video src="https://movie-dev.s3-us-west-1.amazonaws.com/VDKc8WRABx71t4QEtVSopr5C" controls></video> */}
          </div>
        </div>

      </div>
      </div>
    )
  }
} 

export default Home;