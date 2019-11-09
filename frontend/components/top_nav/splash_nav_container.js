import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
import splashNav from './splash_nav';

const mapStateToProps = ({ entities: { users }, session}) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)) //modal is login or signup
})

export default connect(mapStateToProps, mapDispatchToProps)(splashNav)