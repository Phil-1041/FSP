import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions'
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  formType: 'login'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(loginUser(formUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)