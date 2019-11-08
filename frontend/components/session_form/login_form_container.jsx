import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  formType: 'login'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(loginUser(formUser)),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))}>
      Join
    </button>
  ),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)