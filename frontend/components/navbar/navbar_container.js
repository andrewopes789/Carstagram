import { connect } from 'react-redux';
import NavBar from './navbar';

const mapStateToProps = ({ session }) => {
  return ({
    currentUser: session.currentUser
  });
};

export default connect(mapStateToProps, null)(NavBar);
