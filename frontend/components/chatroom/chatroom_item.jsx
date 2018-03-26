import React from 'react';
import { Link } from 'react-router-dom';

class ChatroomItem extends React.Component {
  render () {
    let chatroom = this.props.chatroom;
    let currentUser = this.props.currentUser;
    let photo;
    let username;

    if (chatroom.member1_id === currentUser.id) {
      photo = chatroom.member2_img;
      username = chatroom.member2_username;
    } else {
      photo = chatroom.member1_img;
      username = chatroom.member1_username;
    }
    return (
      <Link
        key={chatroom.id}
        to={`/chatrooms/${chatroom.id}`}
        className='chatroom-item-container'>
            <img className='chatroom-item-image' src={photo}/>
            <div className='chatroom-item-username'>{username}</div>
    </Link>
    );
  }
}

export default ChatroomItem;
