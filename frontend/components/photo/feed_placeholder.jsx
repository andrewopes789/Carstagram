import React from 'react';
import FeedPlaceholderItem from './feed_placeholder_item';

const FeedPlaceholder = ({ users }) => (
  <div className='feed-placeholder-container'>
    {
      users.map(user => (
        <FeedPlaceholderItem
          key={user.id}
          user={user}
        />
      ))
    }
  </div>
);

export default FeedPlaceholder;
