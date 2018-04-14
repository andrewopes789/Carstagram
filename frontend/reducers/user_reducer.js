import { combineReducers } from 'redux';
import { merge } from 'lodash';

import {
  RECEIVE_USER,
  RECEIVE_USERS
} from '../actions/user_actions';

import {
  RECEIVE_FOLLOW, REMOVE_FOLLOW
} from '../actions/follow_actions';

const initialState = {
  detail: {
    followers_by_id: [],
    followings_by_id: [],
    photos_by_id: []
  },
  index: {}
};


export default (state=initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, { detail: action.payload.user });

    case RECEIVE_USERS:
      return merge({}, { index: action.payload.users });

    case RECEIVE_FOLLOW:
      const userId1 = Object.keys(action.payload.user)[0];
      return merge({}, { detail: action.payload.user[userId1] });

    case REMOVE_FOLLOW:
      const userId2 = Object.keys(action.payload.user)[0];
      return merge({}, { detail: action.payload.user[userId2] });

    default:
      return state;
    }
  };
