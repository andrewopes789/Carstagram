import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.userId,
  user: state.entities.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile));
