import React from 'react';
import { Link } from 'react-router-dom';

const siteNav = (currentUser) => (
  <div className='nav-bar'>

    <div className='left-nav'>

      <Link to="/photos" className='nav-bar-logo'>
        <i className='fa fa-automobile'></i>&nbsp;
      </Link>

      <Link to="/photos" className='nav-bar-written-logo'>
        Carstagram
      </Link>

    </div>

    <div className='right-nav'>

      <Link to='/photos' className='nav-icons'>
        <i className='fa fa-heart-o'></i>
      </Link>

      <Link to='/photos' className='nav-icons'>
        <i className='fa fa-user-o'></i>
      </Link>

    </div>
  </div>
);

const NavBar = ({ currentUser, logout }) => (
  currentUser ? siteNav() : null
);

export default NavBar;
