export const fetchChatrooms = () => (
  $.ajax({
    method: 'GET',
    url: '/api/chatrooms'
  })
);

export const fetchChatroom = chatroomId => (
  $.ajax({
    method: 'GET',
    url: `/api/chatrooms/${chatroomId}`
  })
);

export const createChatroom = userId => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/chatrooms`
  })
);
