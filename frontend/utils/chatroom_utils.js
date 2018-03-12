export const fetchChatrooms = () => (
  $.ajax({
    method: 'GET',
    url: '/api/chatrooms'
  })
);

export const createChatroom = chatroom => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${chatroom.recipient_id}/chatrooms`,
    data: { chatroom }
  })
);
