import { combineReducers } from 'redux';

import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE
} from '../actions/message_actions';

import { merge } from 'lodash';

const initialState = {};

export default (state=initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MESSAGES:
      return merge({}, action.messages);

    case RECEIVE_MESSAGE:
      return merge({}, state, action.message);

    default:
      return state;
    }
  };
