import React from 'react';
import UserProfile from '../components/UserProfile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function UserProfileContainer(props) {
   return (
      <div>
            {props.status === "loggedIn" ? 
               <UserProfile username={props.currentUser.username} /> 
               :
               <Redirect to="/" /> // send to homepage if not logged in
            }
      </div>
   )
};

const mapStateToProps = state => {
   return {
      status: state.login.status,
      currentUser: state.login.user
   }
}

export default connect(mapStateToProps)(UserProfileContainer);
