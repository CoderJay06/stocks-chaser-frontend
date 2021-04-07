import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLogout } from '../actions/fetchUsers';
import Logout from '../components/Logout';

class LogoutContainer extends Component {
   render() {
      return (
         <div>
            {console.log('LogoutContainer: ', this.props.currentUser)}
            <Logout user={this.props.currentUser.username} dispatchFetchLogout={this.props.fetchLogout} />
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

export default connect(mapStateToProps, { fetchLogout })(LogoutContainer);