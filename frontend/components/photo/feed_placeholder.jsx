import React from 'react';
import FeedPlaceholderItem from './feed_placeholder_item';

const FeedPlaceholder = props => (
  <div className='feed-placeholder-container'>
    <div className='feed-placeholder-suggested'>Suggested for you</div>
    <div className='feed-placeholder-items'>
      {
        props.users.map(user => (
          <FeedPlaceholderItem
            key={user.id}
            user={user}
            createFollow={props.createFollow}
            deleteFollow={props.deleteFollow}
            currentUser={props.currentUser}
            logout={props.logout}
            />
        ))
      }
    </div>
  </div>
);

export default FeedPlaceholder;
