import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const NavLinks = ({status, user}) => {
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
         {console.log(status)}
         {status === "loggedIn" ?
            <NavLink
               className="inline-block px-4 py-2"
               exact to={`/profile/${user.id}`}>
               Profile
            </NavLink> : null
         }
         <NavLink
            className="inline-block px-4 py-2"
            exact to="/">
            Home
         </NavLink>
      </nav>
   )
}

const mapStateToProps = state => {
   return {
      status: state.login.status,
      user: state.login.user      
   }
}

export default connect(mapStateToProps)(NavLinks);
