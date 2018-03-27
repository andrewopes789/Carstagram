export const fetchChatroomMemberships = () => (
  $.ajax({
    method: 'GET',
    url: '/api/chatroom_memberships'
  })
);

export const fetchChatroomMembership = membershipId => (
  $.ajax({
    method: 'GET',
    url: `/api/chatroom_memberships/${membershipId}`
  })
);

export const createChatroomMembership = chatroomMembership => (
  $.ajax({
    method: 'POST',
    url: `/api/chatroom_memberships`,
    data: { chatroomMembership }
  })
);
