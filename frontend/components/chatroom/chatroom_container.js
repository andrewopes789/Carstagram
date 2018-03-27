import { connect } from 'react-redux';
import Chatroom from './chatroom';
import {
  fetchChatrooms
} from '../../actions/chatroom_actions';
import { setSocket } from '../../actions/action_cable';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  chatrooms: Object.values(state.entities.chatrooms.index),
  loading: state.ui.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  fetchChatrooms: () => dispatch(fetchChatrooms()),
  setSocket: () => dispatch(setSocket(dispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
