import { connect } from 'react-redux';
import {logoutUser, loginUser, signupUser} from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions'
import splashNav from './splash_nav';

const mapStateToProps = ({ entities: { users }, session}) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  login: user => dispatch(loginUser(user)),
  signup: user => dispatch(signup(user)),
  openModal: modal => dispatch(openModal(modal)) //modal is login or signup
})

export default connect(mapStateToProps, mapDispatchToProps)(splashNav)