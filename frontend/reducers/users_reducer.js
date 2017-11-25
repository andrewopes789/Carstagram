import { RECEIVE_USER,
  RECEIVE_ALL_USERS } from '../actions/user_actions';
import { merge } from 'lodash';

const _nullState = {
  id: -1,
  img_url: '',
  username: '',
  email: '',
  followers: [],
  followings: [],
  photos: []
};

export default (state=_nullState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, action.user);
    case RECEIVE_ALL_USERS:
      return merge({}, action.users);
    default:
      return state;
  }
};
