import * as APIUtil from '../utils/comment_utils';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const receiveErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const fetchComments = photoId => dispatch => (
  APIUtil.fetchComments(photoId)
    .then(comments => dispatch(receiveAllComments(comments)))
);

export const createComment = inputComment => dispatch => (
  APIUtil.createComment(inputComment)
    .then(comment => dispatch(receiveComment(comment)))
    .catch(err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const deleteComment = commentId => dispatch => (
  APIUtil.deleteComment(commentId)
    .then(comment => dispatch(removeComment(commentId)))
);
