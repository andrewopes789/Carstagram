import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Discover from './discover';

import {
  createLike,
  deleteLike
} from '../../actions/like_actions';

import {
  createComment,
  deleteComment
} from '../../actions/comment_actions';

import {
  createFollow,
  deleteFollow
} from '../../actions/follow_actions';

import {
  fetchUsers
} from '../../actions/user_actions';

const mapStateToProps = ({session, entities, ui}) => ({
  comments: entities.comments,
  likes: entities.likes,
  currentUser: session.currentUser,
  users: Object.values(entities.user.index),
  photos: Object.values(entities.photos),
  photosAsObject: entities.photos,
  loading: ui.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: pageId => dispatch(fetchUsers(pageId)),
  createLike: photoId => dispatch(createLike(photoId)),
  deleteLike: photoId => dispatch(deleteLike(photoId)),
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  createFollow: followingId => dispatch(createFollow(followingId)),
  deleteFollow: followingId => dispatch(deleteFollow(followingId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Discover));