import { connect } from 'react-redux';
import { createNewUser, receiveErrors } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = state => {
  let errors = state.errors.session ?
  state.errors.session : [];
  return { errors };
};

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  receiveErrors: errors => dispatch(receiveErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
