import { combineReducers } from 'redux';

import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from '../actions/comment_actions';

import { RECEIVE_FEED_PHOTOS } from '../actions/photo_actions';

import { merge } from 'lodash';

const initialState = {};

export default (state=initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FEED_PHOTOS:
      return merge({}, action.payload.comments);
    case RECEIVE_ALL_COMMENTS:
      return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, action.comment);
    case REMOVE_COMMENT:
      let newState3 = merge({}, state);
      delete newState3[action.commentId];
      return newState3;

    default:
      return state;
  }
};
