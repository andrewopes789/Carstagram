import React from 'react';
import LoadingIcon from '../photo/loading_icon';
import { Link } from 'react-router-dom';
import ChatroomItem from './chatroom_item';
import { ProtectedRoute } from '../../utils/route_utils';
import { Route } from 'react-router-dom';
import ChatroomPlaceholderContainer from './chatroom_placeholder_container';
import ChatroomShowContainer from './chatroom_show_container';

class Chatroom extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setSocket();
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
          <Route
            exact path='/chatrooms'
            component={ChatroomPlaceholderContainer}/>

          <ProtectedRoute
            path='/chatrooms/:chatroomId'
            component={ChatroomShowContainer}/>
        </div>
      </div>
    );
  }
}

export default Chatroom;
