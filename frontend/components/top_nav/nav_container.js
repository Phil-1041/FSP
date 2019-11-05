import {connect} from 'react-redux';
import nav from './nav';


const mSTP = (state) => ({
  currentUser: users[session]// need to change according to the state
})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(nav)