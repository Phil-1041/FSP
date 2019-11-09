import { connect } from 'react-redux';
import Home from './user_home';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = ({ entities: { users }, session }) => {
  return ({
    users: users[session.id]
  })
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)