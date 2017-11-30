import React from 'react';

const FollowButton = (props) => {

  let button;
  if (props.user.id === props.currentUser.id) {
    button = (
      <button
        className='follow-button'
      >Edit Profile</button>
    );
  } else if (props.user.followed) {
    button = (
      <button
        className='unfollow-button'
      >Following</button>
    );
  } else {
    button = (
      <button className='follow-button follow'
      onClick={()=>props.createFollow(props.user.id)}
      >Follow</button>
    );
  }

  return button;
};

export default FollowButton;
