import React from 'react';
import LoadingIcon from '../photo/loading_icon';
import { Link } from 'react-router-dom';

class ChatroomShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      chatroom_id: this.props.chatroomId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillMount() {
    this.props.fetchChatroom(this.props.chatroomId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.chatroomId !== this.props.chatroomId) {
      this.props.fetchChatroom(newProps.match.params.chatroomId);
    }
  }

  handleSubmit() {

  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value} );
    };
  }

  render() {
    let messages = this.props.messages;
    let currentUser = this.props.currentUser;

    return (
      this.props.loading ?
      <LoadingIcon /> :
      <div className='message-show-container'>
        {
          messages.map(message => {
            if (message.sender_id === currentUser.id) {
              return (
                <div key={message.id} className='message-item-container'>
                  <div className='message-item-sent'>
                    <span className='message-text'>{message.body}</span>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={message.id} className='message-item-container'>
                  <div className='message-item-received'>
                    <span className='message-text'>{message.body}</span>
                  </div>
                </div>
              );
            }
          }

          )
        }
      </div>
    );
  }
}

export default ChatroomShow;
