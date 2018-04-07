import React from 'react';
import LoadingIcon from '../photo/loading_icon';
import { Link } from 'react-router-dom';
import ChatroomItem from './chatroom_item';
import { ProtectedRoute } from '../../utils/route_utils';
import { Route } from 'react-router-dom';
import ChatroomPlaceholder from './chatroom_placeholder';
import ResultRender from '../navbar/result_render';
import ChatroomShowContainer from './chatroom_show_container';

class Chatroom extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.setSocket();
  }

  componentWillMount() {
    this.props.fetchChatrooms();
  }

  handleSearch(e) {
    this.props.searchDB(e.target.value);
  }

  render() {
    let searchResults = this.props.searchResults;
    let dropdownContent;

    if (searchResults.length === 0) {
      dropdownContent = null;
    } else {
      dropdownContent = (
        <div className='dropdown-content' onClick={this.clearBar}>
          {
            this.props.searchResults.map(result => (
              <ResultRender
                key={result.id}
                result={result}
                />
            ))
          }
        </div>
      );
    }
    return (
      this.props.loading ?
      <LoadingIcon /> :
      <div>
        <div className='messages-container'>
          <div className='chatroom-leftside'>
            <div className='chatroom-leftside-header'>
              <span>Direct Messages</span>
            </div>
            <div className='dropdown'>
              <input
                className='chatroom-search'
                placeholder='Search'
                onChange={this.handleSearch}
              />
            </div>
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
          </div>
          <Route
            exact path='/chatrooms'
            component={ChatroomPlaceholder}/>

          <ProtectedRoute
            path='/chatrooms/:chatroomId'
            component={ChatroomShowContainer}/>
        </div>
      </div>
    );
  }
}

export default Chatroom;
