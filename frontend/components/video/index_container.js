import { connect } from 'react-redux';
import Index from './index';
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = ({entities: {videos}}) => {
  // debugger
  return ({
    videos: Object.values(videos)
  })
}

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos())
})

export default connect(mapStateToProps, mapDispatchToProps)(Show)