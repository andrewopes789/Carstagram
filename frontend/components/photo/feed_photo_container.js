import { connect } from 'react-redux';
import {
  fetchFeedPhotos,
  deletePhotos
} from '../../actions/photo_actions';
import {
  createLike,
  deleteLike
} from '../../actions/like_actions';
import {
  createComment,
  deleteComment
} from '../../actions/comment_actions';

import {
  fetchUsers
} from '../../actions/user_actions';
import FeedPhotos from './feed_photos';

const mapStateToProps = state => ({
    photos: Object.values(state.entities.photos),
    likes: state.entities.likes,
    comments: state.entities.comments,
    users: state.entities.user.index,
    loading: state.ui.loading.indexLoading,
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchFeedPhotos: pageId => dispatch(fetchFeedPhotos(pageId)),
  fetchUsers: pageId => dispatch(fetchUsers(pageId)),
  deletePhotos: () => dispatch(deletePhotos()),
  createLike: photoId => dispatch(createLike(photoId)),
  deleteLike: photoId => dispatch(deleteLike(photoId)),
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedPhotos);
