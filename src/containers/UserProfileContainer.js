import React, { Component } from 'react';
import UserProfile from '../components/UserProfile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logo } from '../styles/Logo';

class UserProfileContainer extends Component {
   render() {
      return (
         <div style={{
                backgroundImage: logo.backgroundImage,
                height: "auto",
                backgroundPosition: "center",
                backgroundRepeat: "repeat-y",
                backgroundSize: "flex"}}>
         
               {this.props.status === "loggedIn" ? 
                  <UserProfile username={this.props.currentUser.username} /> 
                  :
                  <Redirect to="/" /> // send to homepage if not logged in
               }

         </div>
      )
   }
};

const mapStateToProps = state => {
   return {
      status: state.login.status,
      currentUser: state.login.user
   }
}

export default connect(mapStateToProps)(UserProfileContainer);