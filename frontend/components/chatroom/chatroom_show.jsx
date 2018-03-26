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

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage({body: this.state.body,
      chatroom_id: this.state.chatroom_id})
      .then(() => this.setState({body: ''}));
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value} );
    };
  }

  render() {
    let messages = this.props.messages;
    let currentUser = this.props.currentUser;
    let chatroom = this.props.chatroom;
    let photo = null;
    let username = null;
    let id = null;

    // if (chatroom.sender_id === currentUser.id) {
    //   photo = chatroom.recipient_img;
    //   username = chatroom.recipient_username;
    //   id = chatroom.recipient_id;
    // } else {
    //   photo = chatroom.sender_img;
    //   username = chatroom.sender_username;
    //   id = chatroom.sender_id;
    // }

    return (
      this.props.loading ?
      <LoadingIcon /> :
      <div className='message-show-container'>
        <div className='message-recipient-info'>
          <img src={photo} className='message-recipient-img'/>
          <Link
            to={`/users/${id}`}
            className='message-recipient-username'>
            {username}
          </Link>
        </div>

        <div className='messages-only'>
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
            })
          }
        </div>

        <div className='message-input-container'>
          <form
            onSubmit={this.handleSubmit}
            >
            <input
              className='message-input'
              placeholder='Write a message...'
              onChange={this.update('body')}
              value={this.state.body}
              />
          </form>
        </div>
      </div>
    );
  }
}

export default ChatroomShow;
