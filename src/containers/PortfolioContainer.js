import React, { Component } from 'react';
import { connect } from 'react-redux';
import Portfolio from '../components/Portfolio';
import { fetchPortfolios } from '../actions/fetchPortfolios';
import { addPortfolio } from '../actions/portfolio';

class PortfolioContainer extends Component {
   handleOnClick = () => {
      // add a new portfolio for current user
      this.props.dispatchFetchPortfolios(this.props.user)
   }

   render() {
      return (
         <div>
            {console.log('user portfolio in PortfolioContainer ', this.props.user.portfolio)}
            {this.props.user.portfolio.id ?
               // should get users portfolio from the db and display it
               <Portfolio user={this.props.user} portfolio={this.props.portfolio} />
               :
               <button 
                  className="w-2/4 p-4 bg-blue-300 mt-4 hover:bg-blue-400 
                     transition-all duration-200"
                  onClick={() => this.handleOnClick()}
               >Add Portfolio</button>
            }
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

const mapDispatchToProps = dispatch => {
   return {
      dispatchFetchPortfolios: user => dispatch(fetchPortfolios(user)),
      dispatchAddPortfolio: portfolio => dispatch(addPortfolio(portfolio))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);
