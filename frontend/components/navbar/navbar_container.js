import { connect } from 'react-redux';
import NavBar from './navbar';
import {
  searchDB
} from '../../actions/search_actions';

const mapStateToProps = ({session, entities}) => ({
  currentUser: session.currentUser,
  searchResults: Object.values(entities.searchResults)
});

const mapDispatchToProps = dispatch => ({
  searchDB: query => dispatch(searchDB(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
