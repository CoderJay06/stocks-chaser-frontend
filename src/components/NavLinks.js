import React from 'react';
import { NavLink } from 'react-router-dom';
import UserLinks from './UserLinks';

const NavLinks = ({styles, linkStyles}) => {
   return (
      <nav className={styles}>
          
         <NavLink
            className={linkStyles}
            exact to="/">
            Home
         </NavLink>

         <NavLink
            className={linkStyles}
            exact to="/stocks">
            Stocks
         </NavLink>

         <NavLink
            className={linkStyles}
            exact to="/search">
            Search a Stock
         </NavLink>
         
         <UserLinks linkStyles={linkStyles} />
      </nav>
   )
}

export default NavLinks;
