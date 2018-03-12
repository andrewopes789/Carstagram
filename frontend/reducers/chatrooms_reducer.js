import { combineReducers } from 'redux';

import {
  RECEIVE_CHATROOMS,
  RECEIVE_CHATROOM
} from '../actions/chatroom_actions';

import { merge } from 'lodash';

const initialState = {};

export default (state=initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHATROOMS:
      return merge({}, action.chatrooms);

    case RECEIVE_CHATROOM:
      return merge({}, state, action.chatroom);

    default:
      return state;
    }
  };
