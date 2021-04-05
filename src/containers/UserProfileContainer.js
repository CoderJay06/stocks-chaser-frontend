import React, { Component } from 'react';
import UserProfile from '../components/UserProfile';
import { connect } from 'react-redux';

class UserProfileContainer extends Component {
   render() {
      const isLoggedIn = this.props.status;
      return (
         <div>
            {isLoggedIn === "loggedIn" ? 
               <UserProfile username={this.props.currentUser.username} />
               :
               null
            }
         </div>
      )
   }
};

const mapStateToProps = state => {
   // debugger
   return {
      status: state.login.status,
      currentUser: state.login.user
   }
}

export default connect(mapStateToProps)(UserProfileContainer);