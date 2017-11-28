import { connect } from 'react-redux';
import { fetchFeedPhotos } from '../../actions/photo_actions';
import { selectAllPhotos } from '../../reducers/selectors';
import FeedPhotos from './feed_photos';

const mapStateToProps = state => ({
    photos: Object.values(state.entities.photos),
    likes: state.entities.likes,
    comments: state.entities.comments,
    loading: state.ui.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  fetchFeedPhotos: () => dispatch(fetchFeedPhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedPhotos);
