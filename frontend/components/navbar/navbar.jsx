import React from 'react';
import { Link } from 'react-router-dom';

class siteNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    if (e.target.value.length !== 0) {
      this.props.searchDB(e.target.value);
    }
  }

  render() {
    let currentUser = this.props.currentUser;
    return (
      currentUser ?
      <div className='nav-bar-container'>

        <div className='nav-bar'>

          <div className='left-nav'>

            <Link to="/photos" className='nav-bar-logo'>
              <i className='fa fa-automobile'></i>&nbsp;
              </Link>

              <Link to="/photos" className='nav-bar-written-logo'>
                Carstagram
              </Link>

            </div>

            <div>
              <input
                placeholder='Search for a user...'
                onChange={this.handleSearch}
              />
            </div>

            <div className='right-nav'>
              <Link to='/photos/new' className='nav-icons'>
                <i className='fa fa-plus-square-o'></i>
              </Link>

              <Link to='/chatrooms' className='nav-icons'>
                <i className='fa fa-inbox'></i>
              </Link>

              <Link to={`/users/${currentUser.id}`} className='nav-icons'>
                <i className='fa fa-user-o'></i>
              </Link>

            </div>

          </div>

        </div> : null
      );
  }
}

export default siteNav;
