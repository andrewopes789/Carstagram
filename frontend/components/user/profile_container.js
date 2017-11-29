import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import Profile from './profile';
import { selectUser,
selectAllPhotos } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return ({
    userId: ownProps.match.params.userId,
    user: state.entities.users.user,
    photos: Object.values(state.entities.photos),
    photosAsObject: state.entities.photos,
    currentUser: state.session.currentUser,
    loading: state.ui.loading.detailLoading
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(mapStateToProps,
    mapDispatchToProps)(Profile));