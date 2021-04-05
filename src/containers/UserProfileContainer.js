import React, { Component } from 'react';
import UserProfile from '../components/UserProfile';
import { connect } from 'react-redux';

class UserProfileContainer extends Component {
   render() {
      return (
         <div>
            <UserProfile username={this.props.user.username} />
         </div>
      )
   }
};

const mapStateToProps = state => {
   // debugger
   return {
      loginStatus: "loggedIn",
      user: state.login.user
   }
}

export default connect(mapStateToProps)(UserProfileContainer);