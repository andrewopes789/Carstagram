import {
  postUser,
  updateUser,
  postSession,
  deleteSession
} from '../utils/session_utils';

import { receiveUser } from './user_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const createNewUser = formUser => dispatch => (
  postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .catch(err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const editUser = inputUser => dispatch => {
  updateUser(inputUser)
    .then(user => {
      dispatch(receiveCurrentUser(user));
      dispatch(receiveUser(user));
    });
};

export const login = formUser => dispatch => (
  postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .catch(err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
  deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
);
