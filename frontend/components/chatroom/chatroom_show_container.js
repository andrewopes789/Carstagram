import { connect } from 'react-redux';
import ChatroomShow from './chatroom_show';
import {
  fetchChatroom
} from '../../actions/chatroom_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  chatrooms: Object.values(state.entities.chatrooms),
  chatroomId: -1,
  loading: state.ui.loading.itemLoading
});

const mapDispatchToProps = dispatch => ({
  fetchChatroom: chatroomId => dispatch(fetchChatroom(chatroomId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatroomShow);
