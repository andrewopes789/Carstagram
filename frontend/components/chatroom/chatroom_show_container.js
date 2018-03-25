import { connect } from 'react-redux';
import ChatroomShow from './chatroom_show';
import {
  fetchChatroom
} from '../../actions/chatroom_actions';
import {
  createMessage
} from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  messages: Object.values(state.entities.messages),
  loading: state.ui.loading.detailLoading,
  chatroomId: ownProps.match.params.chatroomId
});

const mapDispatchToProps = dispatch => ({
  fetchChatroom: chatroomId => dispatch(fetchChatroom(chatroomId)),
  createMessage: message => dispatch(createMessage(message))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChatroomShow));
