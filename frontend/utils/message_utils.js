export const fetchMessages = () => (
  $.ajax({
    method: 'GET',
    url: '/api/messages'
  })
);

export const createMessage = message => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${message.recipient_id}/messages`,
    data: { message }
  })
);
