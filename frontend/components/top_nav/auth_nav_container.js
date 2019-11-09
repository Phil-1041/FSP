import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions'
import authNav from './auth_nav';

const mapStateToProps = ({ entities: { users }, session }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(authNav)