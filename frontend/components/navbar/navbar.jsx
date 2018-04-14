import React from 'react';
import { Link } from 'react-router-dom';
import NavResultRender from './nav_result_render';

class siteNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchContent: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match !== this.props.match) {
      this.setState({ searchContent: '' });
      this.props.searchDBNav('');
    }
  }

  handleSearch(e) {
    this.props.searchDBNav(e.target.value);
    this.setState( { searchContent: e.target.value });
  }

  render() {
    let currentUser = this.props.currentUser;
    let searchResults = this.props.searchResults;
    let dropdownContent;
    if (searchResults.length === 0) {
      dropdownContent = null;
    } else {
      dropdownContent = (
        <div className='dropdown-content' onClick={this.clearBar}>
          {
            this.props.searchResults.map(result => (
              <NavResultRender
                key={result.id}
                result={result}
                />
            ))
          }
        </div>
      );
    }
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

            <div className='dropdown'>
              <input
                className='search-bar'
                placeholder='Search'
                onChange={this.handleSearch}
                value={this.state.searchContent}
              />
              {dropdownContent}
            </div>

            <div className='right-nav'>
              <Link to='/discover' className='nav-icons'>
                <i className='fa fa-compass'></i>
              </Link>

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
