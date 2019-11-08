import React from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import SignupForm from './signup_form';
import { SIGBREAK } from 'constants';

const mapStateToProps = (state, ownProps) => ({
  // errors: state.errors.session,
  formType: 'signup'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(signupUser(formUser)),
  openModal: () => dispatch(openModal('login')),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)