import * as APIUtil from '../utils/chatroom_utils';

export const RECEIVE_CHATROOMS = 'RECEIVE_CHATROOMS';
export const RECEIVE_CHATROOM = 'RECEIVE_CHATROOM';
export const START_LOADING_CHATROOMS = 'START_LOADING_CHATROOMS';
export const START_LOADING_CHATROOM = 'START_LOADING_CHATROOM';

export const receiveChatroom = payload => ({
  type: RECEIVE_CHATROOM,
  payload
});

export const receiveChatrooms = chatrooms => ({
  type: RECEIVE_CHATROOMS,
  chatrooms
});

export const startLoadingChatrooms = () => ({
  type: START_LOADING_CHATROOMS
});

export const startLoadingChatroom = () => ({
  type: START_LOADING_CHATROOM
});

export const fetchChatrooms = () => dispatch => {
  dispatch(startLoadingChatrooms());
  APIUtil.fetchChatrooms()
    .then(chatrooms => dispatch(receiveChatrooms(chatrooms)));
};

export const fetchChatroom = chatroomId => dispatch => {
  dispatch(startLoadingChatroom());
  APIUtil.fetchChatroom(chatroomId)
    .then(messages => dispatch(receiveChatroom(messages)));
};

export const createChatroom = inputChatroom => dispatch => (
  APIUtil.createChatroom(inputChatroom)
    .then(chatroom => dispatch(receiveChatroom(chatroom)))
);
