import * as APIUtil from '../utils/user_utils';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const START_LOADING_USER = 'START_LOADING_USER';
export const START_LOADING_ALL_USERS = 'START_LOADING_ALL_USERS';

export const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload
});

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const startLoadingUser = () => ({
  type: START_LOADING_USER
});

export const startLoadingAllUsers = () => ({
  type: START_LOADING_ALL_USERS
});

export const fetchUser = userId => dispatch => {
  dispatch(startLoadingUser());
  APIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)));
};

export const fetchAllUsers = () => dispatch => (
  APIUtil.fetchAllUsers()
    .then(users => dispatch(receiveAllUsers(users)))
);
