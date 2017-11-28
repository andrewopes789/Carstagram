import * as APIUtil from '../utils/user_utils';

export const RECEIVE_USER = 'RECEIVE_USER';
export const START_LOADING_USER = 'START_LOADING_USER';

export const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload
});

export const startLoadingUser = () => ({
  type: START_LOADING_USER
});

export const fetchUser = userId => dispatch => {
  dispatch(startLoadingUser());
  APIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)));
};
