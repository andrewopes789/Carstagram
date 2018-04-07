import { connect } from 'react-redux';
import NavBar from './navbar';
import {
  searchDBNav
} from '../../actions/search_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({session, entities}) => ({
  currentUser: session.currentUser,
  searchResults: Object.values(entities.searchResults.navSearch)
});

const mapDispatchToProps = dispatch => ({
  searchDBNav: query => dispatch(searchDBNav(query))
});

export default withRouter(
  connect(mapStateToProps,
    mapDispatchToProps)(NavBar));
