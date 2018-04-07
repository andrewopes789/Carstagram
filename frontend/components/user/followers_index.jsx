import React from 'react';
import FollowItem from './follow_item';

class FollowersIndex extends React.Component {
  render() {
    return (
      <div className='modal'>

        <span className='close-modal'
          onClick={this.props.closeModal}>&times;</span>

          <div className='follow-modal-contents'>
            <div className='follow-modal-header'>
              <strong>Followers</strong>
            </div>
            <div className='follow-modal-users'>
              {
                this.props.followers.map(follow => (
                  <FollowItem
                    key={follow.id}
                    username={follow.follower_username}
                    imgUrl={follow.follower_img_url}
                    userId={follow.follower_id}
                  />
                ))
              }
            </div>
          </div>
      </div>
    );
  }
}

export default FollowersIndex;
