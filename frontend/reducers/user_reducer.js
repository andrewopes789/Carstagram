import { combineReducers } from 'redux';
import { merge } from 'lodash';

import {
  RECEIVE_USER,
  RECEIVE_USERS
} from '../actions/user_actions';

import {
  RECEIVE_FOLLOW, REMOVE_FOLLOW
} from '../actions/follow_actions';

import {
  RECEIVE_RECOMMENDATIONS
} from '../actions/recommendation_actions';

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
      return merge({}, {
        detail: action.payload.user,
        index: {}
      });

    case RECEIVE_USERS:
      return merge({}, {
        index: action.payload.users,
        detail: {
          followers_by_id: [],
          followings_by_id: [],
          photos_by_id: []
        }
      });

    case RECEIVE_FOLLOW:
      return merge({}, state, {
        detail: action.payload.user,
        index: {
          [action.payload.user.id]: action.payload.user
        }
      });

    case REMOVE_FOLLOW:
      return merge({}, state, {
        detail: action.payload.user,
        index: {
          [action.payload.user.id]: action.payload.user
        }
      });

    default:
      return state;
    }
  };
