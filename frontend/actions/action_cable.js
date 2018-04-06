import { receiveMessage } from './message_actions';

export const setSocket = () => (dispatch) => {
  addChatSocket(dispatch);
};

const addChatSocket = (dispatch) => {
  App.chatroomChannel = App.cable.subscriptions.create({
    channel: 'ChatroomChannel'
  }, {
    connected: () => {},
    disconnected: () => {},
    received: (data) => {
      dispatch(receiveMessage(data.message));
    },
    resetChatSocket: () => {
      console.log("PERFORMING RESET");
      App.chatroomChannel.perform("reset_streams");
    }
  });
};
