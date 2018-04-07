import React from 'react';

class FollowersIndex extends React.Component {
  render() {
    return (
      <div className='modal'>

        <span className='close-modal'
          onClick={this.props.closeModal}>&times;</span>

        <div className='modal-contents'>
        </div>
        
      </div>
    );
  }
}

export default FollowersIndex;
