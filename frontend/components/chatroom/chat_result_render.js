import React from 'react';
import { Link } from 'react-router-dom';

class ChatResultRender extends React.Component {

  render() {
    let result = this.props.result;
    return (
      <div
        id={result.id}
        className='result-item-container'
      >
        <img 
          className='result-item-photo' 
          src={result.img_url} 
          id={result.id}
        />
        <div
          id={result.id}
        >
        {result.username}
        </div>
      </div>
    );
  }
}

export default ChatResultRender;
