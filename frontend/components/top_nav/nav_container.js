import {connect} from 'react-redux';
import {logoutUser, loginUser, signupUser} from '../../actions/session_actions'
import nav from './nav';


const mSTP = ({ entities: { users }, session}) => ({
  currentUser: users[session.id]
});

const mDTP = dispatch => ({
  logout: () => dispatch(logoutUser()),
  login: user => dispatch(loginUser(user)),
  signup: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(nav)