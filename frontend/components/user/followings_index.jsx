import React from 'react';
import FollowItem from './follow_item.jsx';

class FollowingsIndex extends React.Component {
  render() {
    return (
      <div className='modal'>

        <span className='close-modal'
          onClick={this.props.closeModal}>&times;</span>

        <div className='follow-modal-contents'>
          {
            this.props.followings.map(follow => (
              <FollowItem
                follow={follow}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default FollowingsIndex;
