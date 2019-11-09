import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return ({
    errors: state.errors.session,
    formType: 'login'
  })
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: formUser => dispatch(loginUser(formUser)),
  openModal: () => dispatch(openModal('signup')),
  closeModal: () => dispatch(closeModal())
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)