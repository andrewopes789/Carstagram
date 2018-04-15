import React from 'react';
import FeedPlaceholderItem from './feed_placeholder_item';

const FeedPlaceholder = ({ users }) => (
  <div className='feed-placeholder-container'>
    <div className='feed-placeholder-suggested'>Suggested for you</div>
    <div className='feed-placeholder-items'>
      {
        users.map(user => (
          <FeedPlaceholderItem
            key={user.id}
            user={user}
            />
        ))
      }
    </div>
  </div>
);

export default FeedPlaceholder;
