import React from 'react';

const FollowButton = (props) => {
  let profButton = props.user.followed ? 'Following' : 'Follow';

  let button = props.user.id === props.currentUser.id ? (
    <button className='follow-button'>Edit Profile</button>
  ) : (
    <button className='follow-button follow'>{profButton}</button>
  );

  return button;
};

export default FollowButton;
