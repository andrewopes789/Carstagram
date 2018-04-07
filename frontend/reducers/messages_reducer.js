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
      let newState = merge({}, state);
      delete newState[action.payload.message.id];
      return merge({}, newState, {
        [action.payload.message.id]: action.payload.message
      });

    case RECEIVE_CHATROOM:
      return merge({}, action.payload.messages);
    default:
      return state;
    }
  };
