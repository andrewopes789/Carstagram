import { connect } from 'react-redux';
import { fetchFeedPhotos } from '../../actions/photo_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import FeedPhotos from './feed_photos';

const mapStateToProps = state => ({
    photos: Object.values(state.entities.photos),
    likes: state.entities.likes,
    comments: state.entities.comments,
    loading: state.ui.loading.indexLoading,
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchFeedPhotos: () => dispatch(fetchFeedPhotos()),
  createLike: photoId => dispatch(createLike(photoId)),
  deleteLike: photoId => dispatch(deleteLike(photoId)),
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedPhotos);
