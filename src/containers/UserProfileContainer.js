import React, { Component } from 'react';
import UserProfile from '../components/UserProfile';
import { connect } from 'react-redux';

class UserProfileContainer extends Component {
   render() {
      const isLoggedIn = this.props.status;
      {console.log(this.props.current.user)}
      return (
         <div>
            {isLoggedIn === "loggedIn" ? 
               <UserProfile username={this.props.current.user.username} />
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
      current: state.login.user
   }
}

export default connect(mapStateToProps)(UserProfileContainer);