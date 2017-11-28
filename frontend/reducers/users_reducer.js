import { combineReducers } from 'redux';
import { merge } from 'lodash';

import {
  RECEIVE_USER,
  RECEIVE_ALL_USERS
} from '../actions/user_actions';

import {
  RECEIVE_FEED_PHOTOS
} from '../actions/photo_actions';

const initialState = {
  users: {},
  user: {
    followers_by_id: [],
    followings_by_id: []
  }
};

export default (state=initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, {user: action.payload.user});
    case RECEIVE_ALL_USERS:
      return merge({}, {users: action.users});
    default:
      return state;
    }
  };
