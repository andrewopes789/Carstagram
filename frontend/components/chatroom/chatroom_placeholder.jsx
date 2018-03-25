import React from 'react';

class ChatroomPlaceholder extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='message-display-container'>
        <div className='message-display'>
          <i className='fa fa-inbox message-image'></i>
          <div className='message-display-placeholder'>
            Messages coming soon!
          </div>
        </div>
      </div>
    );
  }
}

export default ChatroomPlaceholder;
