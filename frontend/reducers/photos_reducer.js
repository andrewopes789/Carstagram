import { combineReducers } from 'redux';

import {
  RECEIVE_FEED_PHOTOS,
  CLEAR_FEED_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
} from '../actions/photo_actions';

import {
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_actions';

import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

import { RECEIVE_USER } from '../actions/user_actions';

import { merge } from 'lodash';

const initialState = {
  feed: {},
  userDetail: {}
};

export default (state=initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIKE:
      return merge({}, state, {
        feed: {[action.photo.id]: action.photo},
        userDetail: {[action.photo.id]: action.photo }
      });
    case REMOVE_LIKE:
      let dupState = merge({}, state);
      dupState.feed[action.photo.id] = action.photo;
      dupState.userDetail[action.photo.id] = action.photo;
      return dupState;

    case RECEIVE_COMMENT:
      return merge({}, state, {
        feed: {[action.photo.id]: action.photo},
        userDetail: {[action.photo.id]: action.photo}
      });
    case REMOVE_COMMENT:
      let copyState = merge({}, state);
      copyState.feed[action.photo.id] = action.photo;
      copyState.userDetail[action.photo.id] = action.photo;
      return copyState;

    case RECEIVE_USER:
      return merge({}, {
        feed: {},
        userDetail: action.payload.photos
      });

    case RECEIVE_FEED_PHOTOS:
      return merge({}, state, {
        feed: action.payload.photos,
        userDetail: {}
      });
    case RECEIVE_PHOTO:
      return merge({}, state, {
        feed: {[action.photo.id]: action.photo},
        userDetail: {[action.photo.id]: action.photo }
      });
    case REMOVE_PHOTO:
      let newState1 = merge({}, state);
      delete newState1.feed[action.photoId];
      delete newState1.userDetail[action.photoId];
      return newState1;
    default:
      return state;
    }
  };
