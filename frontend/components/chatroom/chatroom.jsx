import React from 'react';
import LoadingIcon from '../photo/loading_icon';
import { Link } from 'react-router-dom';
import ChatroomItem from './chatroom_item';

class Chatroom extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchChatrooms();
  }

  render() {
    return (
      this.props.loading ?
      <LoadingIcon /> :
      <div>
        <div className='messages-container'>
          <section className='chatroom-items'>
            {
              this.props.chatrooms.map(chatroom => (
                <ChatroomItem
                  key={chatroom.id}
                  chatroom={chatroom}
                  currentUser={this.props.currentUser}
                  />
              ))
            }
          </section>
          <div className='message-display-container'>
            <div className='message-display'>
              <i className='fa fa-inbox message-image'></i>
              <div className='message-display-placeholder'>
                Messages are a beta feature and will be up and running as soon as we can!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chatroom;
