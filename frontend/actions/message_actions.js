import * as APIUtil from '../utils/comment_utils';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const fetchMessages = () => dispatch => (
  APIUtil.fetchMessages()
    .then(messages => dispatch(receiveMessages(messages)))
);

export const createMessage = inputMessage => dispatch => (
  APIUtil.createMessage(inputMessage)
    .then(message => dispatch(receiveMessage(message)))
);
