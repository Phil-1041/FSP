import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container'
import SignupFormContainer from '../session_form/signup_form_container'


class Modal extends React.Component {
  constructor(props){
    super(props)
    this.slowExit = this.slowExit.bind(this)
  }

  render (){
    if(!this.props.modal) {
      // debugger
      return null;
    }
    let component
    switch (this.props.modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
    }
        
    return (
      <div className="modal-background" onClick={this.slowExit}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div> 
    );
  }
  slowExit () {
    $('.modal-background').fadeOut(256, 
      () => this.props.closeModal() 
    )
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);