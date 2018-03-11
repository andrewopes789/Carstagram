import { connect } from 'react-redux';
import Message from './message';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  messages: state.entities.messages
});

const mapDispatchToProps = dispatch => ({
  fetchFeedPhotos: () => dispatch(fetchFeedPhotos()),
});

export default connect(mapStateToProps, null)(Message);
