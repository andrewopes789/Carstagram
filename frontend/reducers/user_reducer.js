import { combineReducers } from 'redux';
import { merge } from 'lodash';

import {
  RECEIVE_USER
} from '../actions/user_actions';

import {
  RECEIVE_FOLLOW, REMOVE_FOLLOW
} from '../actions/follow_actions';

const initialState = {
  followers_by_id: [],
  followings_by_id: [],
  photos_by_id: []
};

export default (state=initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, action.payload.user);

    case RECEIVE_FOLLOW:
      const userId1 = Object.keys(action.payload.user)[0];
      return merge({}, action.payload.user[userId1]);

    case REMOVE_FOLLOW:
      const userId2 = Object.keys(action.payload.user)[0];
      return merge({}, action.payload.user[userId2]);

    default:
      return state;
    }
  };
