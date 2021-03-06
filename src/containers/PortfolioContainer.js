import React, { useState } from 'react';
import { connect } from 'react-redux';
import Portfolio from '../components/Portfolio';
import { fetchPortfolios } from '../actions/fetchPortfolios';
import { addPortfolio } from '../actions/portfolio';

function PortfolioContainer(props) {
   const [ searchInput, setSearchInput ] = useState("");

   const handleOnClick = () => {
      // add a new portfolio for current user
      props.dispatchFetchPortfolios(props.user)
   }
   
   const handleOnChange = event => {
      setSearchInput(event.target.value);
   }

   // renderSearchResults will display the stocks
   const renderSearchResults = () => {
      // filter out stock results by ticker symbol or name entered
      return props.portfolio.stocks
         .filter(stock => 
               stock.ticker.includes(searchInput.toUpperCase())
            || stock.name.toLowerCase().includes(searchInput.toLowerCase())
      )
   }

   return (
      <div className="max-w-6xl w-3/4 text-center mx-auto mt-16 shadow-2xl text-green-100 
      rounded-lg bg-green-600 bg-opacity-75 hover:bg-green-700 hover:bg-opacity-80 px-4 py-6">
         {props.portfolio.id ?
            (
               <>
                  <input 
                     className="w-half p-3 bg-blue-500 mt-4 hover:bg-blue-700 
                     transition-all duration-200"
                     type="text" 
                     onChange={handleOnChange} 
                     value={searchInput}
                     placeholder="Search your stocks" />

                  <Portfolio 
                     portfolio={props.portfolio}
                     renderedSearchResults={renderSearchResults()} />
               </>
            )
            :
            <button 
               className="w-2/4 p-4 bg-blue-300 mt-4 hover:bg-blue-400 
                           transition-all duration-200"
               onClick={() => handleOnClick()}>Add Portfolio</button>
         }
      </div>
   )
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
