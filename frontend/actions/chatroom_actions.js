import * as APIUtil from '../utils/chatroom_utils';

export const RECEIVE_CHATROOMS = 'RECEIVE_CHATROOMS';
export const RECEIVE_CHATROOM = 'RECEIVE_CHATROOM';
export const START_LOADING_CHATROOMS = 'START_LOADING_CHATROOMS';

export const receiveChatroom = chatroom => ({
  type: RECEIVE_CHATROOM,
  chatroom
});

export const receiveChatrooms = chatrooms => ({
  type: RECEIVE_CHATROOMS,
  chatrooms
});

export const startLoadingChatrooms = () => ({
  type: START_LOADING_CHATROOMS
});

export const fetchChatrooms = () => dispatch => {
  dispatch(startLoadingChatrooms());
  APIUtil.fetchChatrooms()
    .then(chatrooms => dispatch(receiveChatrooms(chatrooms)));
};

export const createChatroom = inputChatroom => dispatch => (
  APIUtil.createChatroom(inputChatroom)
    .then(chatroom => dispatch(receiveChatroom(chatroom)))
);
