import { connect } from 'react-redux';
import Chatroom from './chatroom';
import {
  fetchChatrooms
} from '../../actions/chatroom_actions';
import {
  searchDB
} from '../../actions/search_actions';
import {
  setSocket
} from '../../actions/action_cable';

const mapStateToProps = ({ session, entities, ui }) => ({
  currentUser: session.currentUser,
  chatrooms: Object.values(entities.chatrooms.index),
  searchResults: Object.values(entities.searchResults),
  loading: ui.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  fetchChatrooms: () => dispatch(fetchChatrooms()),
  setSocket: () => dispatch(setSocket(dispatch)),
  searchDB: query => dispatch(searchDB(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
