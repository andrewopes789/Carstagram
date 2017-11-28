import { RECEIVE_PHOTO_ERRORS } from '../actions/photo_actions';
import { RECEIVE_LIKE_ERRORS } from '../actions/like_actions';
import { RECEIVE_COMMENT_ERRORS } from '../actions/comment_actions';
import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

export default (state=[], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      return [...action.errors];
    case RECEIVE_LIKE_ERRORS:
      return [...action.errors];
    case RECEIVE_COMMENT_ERRORS:
      return [...action.errors];
    case RECEIVE_SESSION_ERRORS:
      return [...action.errors];
    default:
      return state;
  }
};
