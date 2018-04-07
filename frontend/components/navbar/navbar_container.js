import { connect } from 'react-redux';
import NavBar from './navbar';
import {
  searchDB
} from '../../actions/search_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({session, entities}) => ({
  currentUser: session.currentUser,
  searchResults: Object.values(entities.searchResults)
});

const mapDispatchToProps = dispatch => ({
  searchDB: query => dispatch(searchDB(query))
});

export default withRouter(
  connect(mapStateToProps,
    mapDispatchToProps)(NavBar));
