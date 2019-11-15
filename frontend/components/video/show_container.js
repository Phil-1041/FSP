import { connect } from 'react-redux';
import VideoShow from './show';
import { fetchVideo } from '../../actions/video_actions';

const mSTP = ( {entities: { videos } }, { match } ) => {
  const videoId = match.params.videoId;
  const video = videos[videoId]
  return {
    videoId,
    video,
  }
}

const mDTP = dispatch => ({
  fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
})

export default connect(mSTP, mDTP)(VideoShow)