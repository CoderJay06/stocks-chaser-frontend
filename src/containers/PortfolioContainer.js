import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Portfolio from '../components/Portfolio';

class PortfolioContainer extends Component {
   render() {
      return (
         <div>
            <Portfolio user={this.props.user} portfolio={this.props.portfolio} />
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      portfolio: state.portfolio,
      user: state.login.user
   }
}

export default connect(mapStateToProps, null)(PortfolioContainer);
