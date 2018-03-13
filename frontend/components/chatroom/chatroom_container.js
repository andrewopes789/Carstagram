import { connect } from 'react-redux';
import Chatroom from './chatroom';
import {
  fetchChatrooms
} from '../../actions/chatroom_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  chatrooms: Object.values(state.entities.chatrooms),
  loading: state.ui.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  fetchChatrooms: () => dispatch(fetchChatrooms())
});

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
