import {connect} from 'react-redux';
import {logoutUser, loginUser, signupUser} from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions'
import nav from './nav';

const mSTP = ({ entities: { users }, session}) => ({
  currentUser: users[session.id]
});

const mDTP = dispatch => ({
  logout: () => dispatch(logoutUser()),
  login: user => dispatch(loginUser(user)),
  signup: user => dispatch(signup(user)),
  openModal: modal => dispatch(openModal(modal)) //modal is login or signup
})

export default connect(mSTP, mDTP)(nav)