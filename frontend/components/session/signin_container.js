import { connect } from 'react-redux';
import {
  createNewUser,
  receiveErrors,
  login } from '../../actions/session_actions';
import Signin from './signin';

const mapStateToProps = state => {
  let errors = state.errors.session ?
  state.errors.session: [];
  return { errors };
};

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  receiveErrors: errors => dispatch(receiveErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
