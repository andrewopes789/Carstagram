import React from 'react';
import { Link } from 'react-router-dom';

const siteNav = ({ currentUser }) => {
 return (
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

       <div className='right-nav'>
         <Link to='/messages' className='nav-icons'>
           <i className='fa fa-inbox'></i>
         </Link>

         <Link to='/photos/new' className='nav-icons'>
           <i className='fa fa-plus-square-o'></i>
         </Link>

         <Link to={`/users/${currentUser.id}`} className='nav-icons'>
           <i className='fa fa-user-o'></i>
         </Link>

       </div>

     </div>

   </div>
  );
};

const NavBar = ({ currentUser, logout }) => (
  currentUser ? siteNav({currentUser, logout}) : null
);

export default NavBar;
