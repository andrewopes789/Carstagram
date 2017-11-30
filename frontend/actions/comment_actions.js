import * as APIUtil from '../utils/comment_utils';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const receiveComment = ({comment, photo}) => ({
  type: RECEIVE_COMMENT,
  comment,
  photo
});

export const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const receiveErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

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
