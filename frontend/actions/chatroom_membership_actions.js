import * as APIUtil from '../utils/chatroom_membership_utils';

export const RECEIVE_CHATROOM_MEMBERSHIPS = 'RECEIVE_CHATROOM_MEMBERSHIPS';
export const RECEIVE_CHATROOM_MEMBERSHIP = 'RECEIVE_CHATROOM_MEMBERSHIP';

export const receiveChatroomMemberships = chatroomMemberships => ({
  type: RECEIVE_CHATROOM_MEMBERSHIPS,
  chatroomMemberships
});

export const receiveChatroomMembership = membership => ({
  type: RECEIVE_CHATROOM_MEMBERSHIP,
  membership
});

export const fetchChatroomMemberships = () => dispatch => {
  APIUtil.fetchChatroomMemberships()
    .then(chatroomMemberships =>
      dispatch(receiveChatroomMemberships(chatroomMemberships)));
};

export const fetchChatroomMembership = membershipId => dispatch => {
  APIUtil.fetchChatroomMembership(membershipId)
    .then(membership => dispatch(receiveChatroomMembership(membership)));
};

export const createChatroomMembership = chatroomMembership => dispatch => (
  APIUtil.createChatroomMembership(chatroomMembership)
    .then(membership => dispatch(receiveChatroomMembership(membership)))
);
