import React from 'react';
import FollowItem from './follow_item';

class FollowingsIndex extends React.Component {
  render() {
    return (
      <div className='modal'>

        <span className='close-modal'
          onClick={this.props.closeModal}>&times;</span>

        <div className='follow-modal-contents'>
          <div className='follow-modal-header'>
            <strong>Following</strong>
          </div>
          <div className='follow-modal-users'>
            {
              this.props.followings.map(follow => (
                <FollowItem
                  key={follow.id}
                  username={follow.following_username}
                  imgUrl={follow.following_img_url}
                  userId={follow.following_id}
                  />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default FollowingsIndex;
