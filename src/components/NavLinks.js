import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
   return (
      <nav className="text-center bg-blue-500 text-green-100 p-4">
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
         <NavLink
            className="inline-block px-4 py-2"
            exact to="/signup">
            Signup
         </NavLink>
         <NavLink
            className="inline-block px-4 py-2"
            exact to="/login">
            Login
         </NavLink>
         <NavLink
            className="inline-block px-4 py-2"
            exact to="/profile">
            Profile
         </NavLink>
         <NavLink
            className="inline-block px-4 py-2"
            exact to="/">
            Home
         </NavLink>
      </nav>
   )
}

export default NavLinks;
