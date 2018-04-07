import React from 'react';
import { Link } from 'react-router-dom';

class FollowItem extends React.Component {
  render() {
    let imgUrl = this.props.imgUrl;
    let username = this.props.username;
    let userId = this.props.userId;
    return (
        <div className='follow-item-container'>
          <img
            className='follow-item-img'
            src={imgUrl}/>
          <Link
            to={`/users/${userId}`}
            className='follow-item-username'>
              {username}
          </Link>
        </div>
    );
  }
}

export default FollowItem;
