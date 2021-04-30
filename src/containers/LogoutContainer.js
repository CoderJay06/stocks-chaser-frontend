import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLogout } from '../actions/fetchUsers';
import { removePortfolio } from '../actions/portfolio';
import Logout from '../components/Logout';

class LogoutContainer extends Component {
   render() {
      return (
         <div>
            {console.log(this.props)}
            <Logout user={this.props.currentUser.username} 
                    dispatchFetchLogout={this.props.fetchLogout}
                    dispatchRemovePortfolio={this.props.removePortfolio} />
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

export default connect(mapStateToProps, { fetchLogout, removePortfolio })(LogoutContainer);
