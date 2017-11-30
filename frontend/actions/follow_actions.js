import * as APIUtil from '../utils/follow_utils';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';

export const receiveFollow = payload => ({
  type: RECEIVE_FOLLOW,
  payload
});

export const removeFollow = payload => ({
  type: REMOVE_FOLLOW,
  payload
});

export const receiveErrors = errors => ({
  type: RECEIVE_FOLLOW_ERRORS,
  errors
});

export const createFollow = inputFollowingId => dispatch => (
  APIUtil.createFollow(inputFollowingId)
    .then(payload => dispatch(receiveFollow(payload)))
    .catch(err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const deleteFollow = inputFollowingId => dispatch => (
  APIUtil.deleteFollow(inputFollowingId)
    .then(payload => dispatch(removeFollow(payload)))
);
