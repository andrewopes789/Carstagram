import { combineReducers } from 'redux';

import {
  RECEIVE_CHATROOMS,
  RECEIVE_CHATROOM
} from '../actions/chatroom_actions';

import { merge } from 'lodash';

const initialState = {
  index: false,
  single: false
};

export default (state=initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHATROOMS:
      return Object.assign({}, state, {index: action.chatrooms});

    case RECEIVE_CHATROOM:
      return Object.assign({}, state, {single: action.payload.chatroom});
    default:
      return state;
    }
  };
