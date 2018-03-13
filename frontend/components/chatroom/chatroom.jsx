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
        <footer className='session-footer'>
          <div className='footer-items-left'>
            <a href="http://hireandrewcho.today/"
              className="footer-item" >
              <span className="label">Portfolio</span>
            </a>
            <a href="https://github.com/andrewopes789"
              className="footer-item" target="_blank">
              <span className="label">Github</span>
            </a>
            <a href="https://www.linkedin.com/in/andrew-cho-64b082155/"
              className="footer-item" target="_blank">
              <span className="label">LinkedIn</span>
            </a>
          </div>
          <div className='footer-items-right'>
            © Andrew Cho 2018
          </div>
        </footer>
      </div>
    );
  }
}

export default Chatroom;
