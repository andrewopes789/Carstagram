import React from 'react';
import { Link } from 'react-router-dom';
import FollowButton from '../user/follow_button';

const FeedPlaceholderItem = props => (
  <div className='feed-placeholder-item' key={props.user.id}>
    <Link to={`/users/${props.user.id}`}>
      <img
        alt='user image'
        className='feed-placeholder-img'
        src={props.user.img_url}
        />
    </Link>
    <Link
      to={`/users/${props.user.id}`}
      className='feed-placeholder-username'>
      {props.user.username}
    </Link>

    <FollowButton
      currentUser={props.currentUser}
      user={props.user}
      createFollow={props.createFollow}
      deleteFollow={props.deleteFollow}
      logout={props.logout}
    />
  </div>
);

export default FeedPlaceholderItem;
