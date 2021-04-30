import React from 'react';
import { NavLink } from 'react-router-dom';
import UserLinks from './UserLinks';

const NavLinks = () => {
   return (
      <nav className="text-center bg-blue-500 text-green-100 p-4">
         <NavLink
            className="inline-block px-4 py-2"
            exact to="/">
            Home
         </NavLink>

         <NavLink
            className="inline-block px-4 py-2"
            exact to="/stocks">
            Stocks
         </NavLink>

         <NavLink
            className="inline-block px-4 py-2"
            exact to="/search">
            Search a Stock
         </NavLink>
         
         <UserLinks />
      </nav>
   )
}

export default NavLinks;
