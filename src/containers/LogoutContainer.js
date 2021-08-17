import React from 'react';
import { connect } from 'react-redux';
import { fetchLogout } from '../actions/fetchUsers';
import { removePortfolio } from '../actions/portfolio';
import Logout from '../components/Logout';

function LogoutContainer(props) {
   return (
      <div>
         <Logout user={props.currentUser.username} 
                  dispatchFetchLogout={props.fetchLogout}
                  dispatchRemovePortfolio={props.removePortfolio} />
      </div>
   )
}

const mapStateToProps = state => {
   return {
      status: state.login.status,
      currentUser: state.login.user
   }
}

export default connect(mapStateToProps, { fetchLogout, removePortfolio })(LogoutContainer);
