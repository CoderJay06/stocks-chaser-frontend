import React, { Component } from 'react';
import UserProfile from '../components/UserProfile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class UserProfileContainer extends Component {
   render() {
      return (
         <div className="max-w-6xl w-2/4 mx-auto mt-16 shadow-lg text-green-100 px-4 py-6">
            {this.props.status === "loggedIn" ? 
               <UserProfile username={this.props.currentUser.username} /> 
               // <Logout />
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