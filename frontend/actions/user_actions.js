import * as APIUtil from '../utils/user_utils';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const fetchUser = userId => dispatch => (
  APIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
);

export const fetchAllUsers = () => dispatch => (
  APIUtil.fetchAllUsers()
    .then(users => dispatch(receiveAllUsers(users)))
);
