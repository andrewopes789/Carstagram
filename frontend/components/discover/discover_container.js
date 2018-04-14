import { connect } from 'react-redux';
import Discover from './discover';

import {
  createFollow
} from '../../actions/follow_actions';

const mapStateToProps = ({session, entities}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createFollow: followingId => dispatch(createFollow(followingId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
