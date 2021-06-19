import React, { Component } from 'react';
import { connect } from 'react-redux';
import Portfolio from '../components/Portfolio';
import { fetchPortfolios } from '../actions/fetchPortfolios';
import { addPortfolio } from '../actions/portfolio';

class PortfolioContainer extends Component {
   state = {
      searchInput: ''
   }

   handleOnClick = () => {
      // add a new portfolio for current user
      this.props.dispatchFetchPortfolios(this.props.user)
   }
   // we need a search input box where the user can search
   // their portfolio stocks by ticker symbol 

   // requiremets: 
      // state for user input 
      // need to update state while user types
      // onChange event 
      // render search results by ticker symbol
      // need to map through portfolio stocks and grab by ticker


   // handleOnChange is going to take in event and will update the state
   handleOnChange = event => {
      this.setState({
         searchInput: event.target.value
      })
   }

   // renderSearchResults will display the stocks
   renderSearchResults = () => {
      // filter out stock results by ticker symbol or name entered
      return this.props.portfolio.stocks
         .filter(stock => 
               stock.ticker.includes(this.state.searchInput.toUpperCase())
            || stock.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
      )
   }

   render() {
      return (
         <div className="max-w-6xl w-3/4 text-center mx-auto mt-16 shadow-2xl text-green-100 
         rounded-lg bg-green-600 bg-opacity-75 hover:bg-green-700 hover:bg-opacity-80 px-4 py-6">
            {this.props.portfolio.id ?
               // should get users portfolio from the db and display it
               (
                  <>
                     {/* {this.state.searchInput}
                     {this.renderSearchResults} */}
                     <input 
                        className="w-half p-3 bg-blue-500 mt-4 hover:bg-blue-700 
                        transition-all duration-200"
                            type="text" 
                            onChange={this.handleOnChange} 
                            value={this.state.searchInput}
                            placeholder="Search your stocks" />
                     <Portfolio 
                        user={this.props.user} 
                        portfolio={this.props.portfolio}
                        renderedSearchResults={this.renderSearchResults()} />
                  </>
               )
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
