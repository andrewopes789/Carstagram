import { connect } from 'react-redux';
import Chatroom from './chatroom';
import {
  fetchChatrooms
} from '../../actions/chatroom_actions';
import {
  searchDBChat
} from '../../actions/search_actions';
import {
  setSocket
} from '../../actions/action_cable';

const mapStateToProps = ({ session, entities, ui }) => ({
  currentUser: session.currentUser,
  chatrooms: Object.values(entities.chatrooms.index),
  searchResults: Object.values(entities.searchResults.chatSearch),
  loading: ui.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  fetchChatrooms: () => dispatch(fetchChatrooms()),
  setSocket: () => dispatch(setSocket(dispatch)),
  searchDBChat: query => dispatch(searchDBChat(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
