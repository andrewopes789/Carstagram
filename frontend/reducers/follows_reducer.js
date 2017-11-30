import { combineReducers } from 'redux';

import {
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follow_actions';

import { RECEIVE_USER } from '../actions/user_actions';

import { merge } from 'lodash';

const initialState = {};

export default (state=initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, action.payload.follows);

    case RECEIVE_FOLLOW:
      return merge({}, state,
        {[action.payload.follow.id]: action.payload.follow});

    case REMOVE_FOLLOW:
      let newState2 = merge({}, state);
      delete newState2[action.payload.follow.id];
      return newState2;

    default:
      return state;
    }
  };
