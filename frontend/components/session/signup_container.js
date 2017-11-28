import { connect } from 'react-redux';
import { createNewUser,
  receiveErrors,
  login } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import Signup from './signup';

const mapStateToProps = state => {
  let errors = state.errors.session ?
  state.errors.session : [];
  return { errors };
};

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  receiveErrors: errors => dispatch(receiveErrors(errors)),
  login: formUser => dispatch(login(formUser))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Signup));
