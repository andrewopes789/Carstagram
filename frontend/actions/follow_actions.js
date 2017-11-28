import * as APIUtil from '../utils/follow_utils';

export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';

export const receiveAllFollows = follows => ({
  type: RECEIVE_ALL_FOLLOWS,
  follows
});

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = followId => ({
  type: REMOVE_FOLLOW,
  followId
});

export const receiveErrors = errors => ({
  type: RECEIVE_FOLLOW_ERRORS,
  errors
});

export const fetchFollows = photoId => dispatch => (
  APIUtil.fetchFollows(photoId)
    .then(follows => dispatch(receiveAllFollows(follows)))
);

export const createFollow = inputFollow => dispatch => (
  APIUtil.createFollow(inputFollow)
    .then(follow => dispatch(receiveFollow(follow)))
    .catch(err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const deleteFollow = followId => dispatch => (
  APIUtil.deleteFollow(followId)
    .then(follow => dispatch(removeFollow(followId)))
);
