import React from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  // errors: state.errors.session,
  formType: 'signup'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(signupUser(formUser)),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Log in
    </button>
  ),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)