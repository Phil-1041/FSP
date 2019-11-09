import { connect } from 'react-redux';
import { signupUser, loginUser } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import SignupForm from './signup_form';

const demoUser = {
  email: 'demo@email.com',
  password: 'movieo'
}

const mapStateToProps = (state) => ({
  errors: state.errors.session, //check where errors come from 
  formType: 'signup'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: formUser => dispatch(signupUser(formUser)),
  login: () => dispatch(loginUser(demoUser)),
  openModal: () => dispatch(openModal('login')),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)