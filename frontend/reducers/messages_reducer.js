import { combineReducers } from 'redux';

import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE
} from '../actions/message_actions';

import {
  RECEIVE_CHATROOM
} from '../actions/chatroom_actions';

import { merge } from 'lodash';

const initialState = {};

export default (state=initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MESSAGES:
      return merge({}, state, action.messages);

    case RECEIVE_MESSAGE:
      return merge({}, state, action.message);

    case RECEIVE_CHATROOM:
      return merge({}, state, action.messages);
    default:
      return state;
    }
  };
