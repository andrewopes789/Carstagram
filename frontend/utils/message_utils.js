export const fetchMessages = chatroomId => (
  $.ajax({
    method: 'GET',
    url: `/api/messages/${chatroomId}`
  })
);

export const createMessage = message => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${message.recipient_id}/messages`,
    data: { message }
  })
);
