import React from 'react';
import { Link } from 'react-router-dom';

class MessageForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      recipient_id: this.props.user.id,
      chatroom_id: -1,
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.body !== "") {
      this.props.createMessage({
        recipient_id: this.state.recipient_id,
        chatroom_id: newProps.chatroom.id,
        body: this.state.body})
        .then(() => this.setState({body: ""}));
      this.props.closeMessageModal();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChatroom(this.props.user.id);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value} );
    };
  }

  render () {

    return(
      <div className='modal'>

        <span className='close-modal'
          onClick={this.props.closeMessageModal}>&times;</span>

        <div className='modal-contents'>

          <div className='modal-message-show-container'>
            <div className='modal-message-recipient'>
              <div className='modal-message-to'>To:</div>
              <div className='modal-message-user-item'>
                <img
                  className='modal-message-img'
                  src={this.props.user.img_url}
                  />
                <div className='modal-message-username'>
                  {this.props.user.username}
                </div>
              </div>
            </div>

            <form onSubmit={this.handleSubmit}
              className='modal-message-input-container'>
              <textarea
                className='modal-message-input'
                placeholder='Write a message...'
                onChange={this.update('body')}
                value={this.state.body}
                />
            </form>

            <div className='modal-message-send-container'>
              <button
                onClick={this.handleSubmit}
                className='modal-message-send'>
                Send
              </button>
            </div>
          </div>

        </div>

      </div>
      );
    }
}



export default MessageForm;
