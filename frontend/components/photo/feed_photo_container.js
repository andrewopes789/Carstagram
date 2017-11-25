import { connect } from 'react-redux';
import { fetchFeedPhotos } from '../../actions/photo_actions';
import FeedPhotos from './feed_photos';

const mapStateToProps = state => ({
  photos: Object.keys(state.entities.photos)
  .map(id => state.entities.photos[id])
});

const mapDispatchToProps = dispatch => ({
  fetchFeedPhotos: () => dispatch(fetchFeedPhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedPhotos);
