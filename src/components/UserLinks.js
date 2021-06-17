import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../actions/users';
import { removePortfolio } from '../actions/portfolio';

const UserLinks = ({status, user, logoutUser, removePortfolio, linkStyles}) => {
   return (
      <>
         {status === "loggedIn" ?
            <>
               <NavLink
                  className={linkStyles}
                  exact to={`/profile/${user.id}`}>
                  Profile
               </NavLink> 

               <NavLink
                  className={linkStyles}
                  exact to="/logout"
                  onClick={() => {
                     logoutUser(user)
                     removePortfolio()
                  }}>
                  Logout
               </NavLink> 
            </>
            :
            <>
               <NavLink
                  className={linkStyles}
                  exact to="/signup">
                  Signup
               </NavLink>
               
               <NavLink
                  className={linkStyles}
                  exact to="/login">
                  Login
               </NavLink> 
            </>
         }
      </>
   )
}

const mapStateToProps = state => {
   return {
      status: state.login.status,
      user: state.login.user      
   }
}

export default connect(mapStateToProps, { logoutUser, removePortfolio })(UserLinks);
