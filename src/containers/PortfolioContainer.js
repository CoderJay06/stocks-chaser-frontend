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
      const url = "http://localhost:3000/api/v1/users/1/portfolios/1";
      const portfolioConfigObj = {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         }
      };
      fetch(url, portfolioConfigObj)
         .then(response => response.json())
         .then(portfolioData => {
            debugger
         })
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

export default connect()(PortfolioContainer);