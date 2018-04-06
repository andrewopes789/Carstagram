import { connect } from 'react-redux';
import NavBar from './navbar';
import {
  searchDB
} from '../../actions/search_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  searchDB: query => dispatch(searchDB(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
