import { connect } from 'react-redux';
import Home from './user_home';
import { logoutUser } from '../../actions/session_actions';
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = ({ entities: { users, videos }, session }) => {
  return ({
    user: users[session.id],
    videos
  })
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser()),
  fetchVideos: () => dispatch(fetchVideos())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)