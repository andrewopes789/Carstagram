import { connect } from 'react-redux';
import { fetchProfilePhotos } from '../../actions/photo_actions';
import Profile from './profile';

const mapStateToProps = state => ({
  photos: Object.keys(state.entities.photos)
  .map(id => state.entities.photos[id])
});

const mapDispatchToProps = dispatch => ({
  fetchProfilePhotos: () => dispatch(fetchProfilePhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
