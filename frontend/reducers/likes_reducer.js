import { combineReducers } from 'redux';

import {
  RECEIVE_ALL_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_actions';

import { RECEIVE_FEED_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_USER } from '../actions/user_actions';

import { merge } from 'lodash';

const initialState = {};

export default (state=initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FEED_PHOTOS:
      return merge({}, state, action.payload.likes);
    case RECEIVE_USER:
      return merge({}, action.payload.likes);

    case RECEIVE_LIKE:
      return merge({}, state, action.like);
    case REMOVE_LIKE:
      let newState2 = merge({}, state);
      delete newState2[action.like.id];
      return newState2;

    default:
      return state;
    }
  };
