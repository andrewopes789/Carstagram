export const fetchMessages = chatroomId => (
  $.ajax({
    method: 'GET',
    url: `/api/messages/${chatroomId}`
  })
);

export const createMessage = message => (
  $.ajax({
    method: 'POST',
    url: `/api/chatrooms/${message.chatroom_id}/messages`,
    data: { message }
  })
);
