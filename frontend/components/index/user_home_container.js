import { connect } from 'react-redux';
import Home from './user_home';

const mapStateToProps = ({ entities: { users }, session }) => {
  return ({
    users: users[session.id]
  })
}

const mapDispatchToProps = (dispatch) => ({
  somethinghere: null //remove, this is placeholder
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)