import React from 'react';

const FeedPlaceholderItem = ({ user }) => (
  <div className='feed-placeholder-item' key={user.id}>
    <img
      alt='user image'
      className='feed-placeholder-img'
      src={user.img_url}
    />
    <div
      className='feed-placeholder-username'
    >{user.username}</div>
  </div>
);

export default FeedPlaceholderItem;
