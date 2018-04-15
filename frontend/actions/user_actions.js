import * as APIUtil from '../utils/user_utils';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const START_LOADING_USER = 'START_LOADING_USER';
export const START_LOADING_USERS = 'START_LOADING_USERS';

export const receiveUsers = payload => ({
  type: RECEIVE_USERS,
  payload
});

export const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload
});

export const startLoadingUsers = () => ({
  type: START_LOADING_USERS
});

export const startLoadingUser = () => ({
  type: START_LOADING_USER
});

export const fetchUsers = pageId => dispatch => {
  dispatch(startLoadingUsers());
  APIUtil.fetchUsers(pageId)
  .then(users => dispatch(receiveUsers(users)));
};

export const fetchUser = userId => dispatch => {
  dispatch(startLoadingUser());
  APIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)));
};
