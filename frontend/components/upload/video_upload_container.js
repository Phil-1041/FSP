import { connect } from 'react-redux';
import { uploadVideo } from '../../actions/video_actions';
import videoUpload from './video_upload';

const mapStateToProps = ({ entities: { users }, session }) => ({
  currentUser: users[session.id],
  session
});

const mDTP = dispatch => ({
  uploadVideo: video => dispatch(uploadVideo(video))
})

export default connect(mapStateToProps, mDTP)(videoUpload)