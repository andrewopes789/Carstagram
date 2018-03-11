import { connect } from 'react-redux';
import Message from './message';
import {
  fetchMessages
} from '../../actions/message_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  messages: state.entities.messages,
  loading: state.ui.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages())
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
