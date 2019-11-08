import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import SignupForm from './signup_form';

const mapStateToProps = (state) => ({
  errors: state.errors.session, //check where errors come from 
  formType: 'signup'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: formUser => dispatch(signupUser(formUser)),
  openModal: () => dispatch(openModal('login')),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)