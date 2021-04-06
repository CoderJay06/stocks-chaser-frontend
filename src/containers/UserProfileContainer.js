import React, { Component } from 'react';
import UserProfile from '../components/UserProfile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class UserProfileContainer extends Component {
   render() {
      return (
         <div>
            {this.props.status === "loggedIn" ? 
               <UserProfile username={this.props.current.user.username} />
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
      current: state.login.user
   }
}

export default connect(mapStateToProps)(UserProfileContainer);