import React from 'react';
import LoadingIcon from '../photo/loading_icon';
import { Link } from 'react-router-dom';

class ChatroomShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchChatroom(this.props.chatroomId);
  }

  render() {
    return (
      this.props.loading ?
      <LoadingIcon /> :
      <div>
      </div>
    );
  }
}

export default ChatroomShow;
