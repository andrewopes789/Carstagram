import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import PhotoUpload from './photo_upload';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ ui, session }) => ({
  errors: ui.errors,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PhotoUpload));
