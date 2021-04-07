import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/users';
import Logout from '../components/Logout';

class LogoutContainer extends Component {
   render() {
      return (
         <div>
            {console.log('LogoutContainer: ', this.props.currentUser)}
            <Logout user={this.props.currentUser.username} dispatchLogout={this.props.logoutUser} />
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      status: state.login.status,
      currentUser: state.login.user
   }
}

export default connect(mapStateToProps, { logoutUser })(LogoutContainer);