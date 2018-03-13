import React from 'react';
import { Link } from 'react-router-dom';

class ChatroomItem extends React.Component {
  render () {
    let chatroom = this.props.chatroom;
    let image = chatroom.sender_id === this.props.currentUser.id ?
                chatroom.recipient_img : chatroom.sender_img;

    let username = chatroom.sender_id === this.props.currentUser.id ?
                   chatroom.recipient_username : chatroom.sender_username;

    return (
      <div key={chatroom.id} className='chatroom-item-container'>
        <img className='chatroom-item-image' src={image}/>
        <div className='chatroom-item-username'>{username}</div>
      </div>
    );
  }
}

export default ChatroomItem;
