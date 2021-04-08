import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Portfolio from '../components/Portfolio';

class PortfolioContainer extends Component {
   state = {
      portfolio: {
         userId: '',
         stocks: []
      }
   }

   handleOnClick = () => {
      // view users portfolio
   }

   render() {
      return (
         <div>
            <button 
               className="w-half p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200"
               onClick={this.handleOnClick}
            >
            View Portfolio
            </button>
         </div>
      )
   }
}

export default connect(null, null)(PortfolioContainer);