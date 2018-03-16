import { connect } from 'react-redux';
import Footer from './footer';

const mapStateToProps = ({ session }) => {
  return ({
    currentUser: session.currentUser
  });
};

export default connect(mapStateToProps, null)(Footer);
