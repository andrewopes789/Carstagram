import React from 'react';

const FeedPlaceholderItem = ({ user }) => (
  <div className='feed-placeholder-item' key={user.id}>
    {user.username}
  </div>
);

export default FeedPlaceholderItem;
