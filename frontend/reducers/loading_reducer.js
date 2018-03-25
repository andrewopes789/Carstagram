import {
  RECEIVE_FEED_PHOTOS,
  RECEIVE_PHOTO,
  START_LOADING_FEED_PHOTOS,
  START_LOADING_SINGLE_PHOTO,
  RECEIVE_PHOTO_ERRORS
} from '../actions/photo_actions';

import {
  RECEIVE_USER,
  RECEIVE_ALL_USERS,
  START_LOADING_USER,
  START_LOADING_ALL_USERS
} from '../actions/user_actions';

import {
  RECEIVE_MESSAGES,
  START_LOADING_MESSAGES
} from '../actions/chatroom_actions';

import {
  RECEIVE_CHATROOMS,
  RECEIVE_CHATROOM,
  START_LOADING_CHATROOMS,
  START_LOADING_CHATROOM
} from '../actions/chatroom_actions';

const initialState = {
  indexLoading: false,
  detailLoading: false
};

export default (state=initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case START_LOADING_FEED_PHOTOS:
    return Object.assign({}, state, {indexLoading: true});
    case RECEIVE_FEED_PHOTOS:
      return Object.assign({}, state, {indexLoading: false});

    case START_LOADING_SINGLE_PHOTO:
      return Object.assign({}, state, {detailLoading: true});
    case RECEIVE_PHOTO:
      return Object.assign({}, state, {detailLoading: false});

    case START_LOADING_USER:
      return Object.assign({}, state, {detailLoading: true});
    case RECEIVE_USER:
      return Object.assign({}, state, {detailLoading: false});

    case START_LOADING_ALL_USERS:
      return Object.assign({}, state, {indexLoading: true});
    case RECEIVE_ALL_USERS:
      return Object.assign({}, state, {indexLoading: false});

    case START_LOADING_MESSAGES:
      return Object.assign({}, state, {indexLoading: true});
    case RECEIVE_MESSAGES:
      return Object.assign({}, state, {indexLoading: false});

    case START_LOADING_CHATROOM:
      return Object.assign({}, state, {detailLoading: true});
    case RECEIVE_CHATROOM:
      return Object.assign({}, state, {detailLoading: false});

    case START_LOADING_CHATROOMS:
      return Object.assign({}, state, {indexLoading: true});
    case RECEIVE_CHATROOMS:
      return Object.assign({}, state, {indexLoading: false});

    default:
      return state;
  }
};
