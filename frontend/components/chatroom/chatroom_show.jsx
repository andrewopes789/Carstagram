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

  componentWillReceiveProps(newProps) {
    
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.chatroomId !== this.props.chatroomId) {
      this.props.fetchChatroom(newProps.match.params.chatroomId);
    }
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
