import React, { Component } from 'react';
import UserProfile from '../components/UserProfile';
import { connect } from 'react-redux';

class UserProfileContainer extends Component {
   render() {
      return (
         <div>
            <UserProfile username={this.props.currentUser.username} />
         </div>
      )
   }
};

const mapStateToProps = state => {
   // debugger
   return {
      loginStatus: "loggedIn",
      currentUser: state.login.user
   }
}

export default connect(mapStateToProps)(UserProfileContainer);