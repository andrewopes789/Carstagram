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

// export const setSocket = (channelName) => (dispatch) => {
//   if (window.App.channel) {
//     removeSocket();
//   }
//   addSocket(channelName, dispatch);
// };
//
// export const removeSocket = () => {
//   window.App.cable.subscriptions.remove(window.App.channel);
// };
//
// export const addSocket = (channelName, dispatch) => {
//   window.App.channel = window.App.cable.subscriptions.create({
//     channel: 'ChatroomChannel',
//     channel_name: channelName
//   }, {
//     connected: () => {},
//     disconnected: () => {},
//     received: (data) => {
//       if (data.message) {
//         dispatch(receiveMessage(data.message));
//       }
//     }
//   });
// };
