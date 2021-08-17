import React, { useState } from 'react';
import { Stock } from '../components/Stock';
import { connect } from 'react-redux';
import { fetchPortfolioStocks } from '../actions/fetchPortfolios';

function StockSearchForm(props) {
   const [ search, setSearchState ] = useState({
      input: '',
      results: []
   })
   const _APIKEY = process.env.REACT_APP_STOCKS_API_KEY;

   const handleOnChange = event => {
      setSearchState({
         ...search,
         input: event.target.value.toUpperCase()
      });
   }

   const handleOnSubmit = event => {
      event.preventDefault();

      const searchQuery = 
         `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${search.input}` +
            `&apikey=${_APIKEY}`

      // fetch stock data from aplhavantage api
      fetch(searchQuery, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         }
      }).then(response => response.json())
        .then(stockData => {
            setSearchState({
               ...search,
               results: stockData
            })
        });

        // reset state
        setSearchState({
            input: '',
            results: []
        });
   }

   return (
      <div>
         <form onSubmit={handleOnSubmit}
               className="max-w-6xl w-2/4 mx-auto mt-16 rounded-lg shadow-2xl bg-green-600 
                  bg-opacity-75 hover:bg-green-700 hover:bg-opacity-80 px-4 py-6">
            <label>Search a Stock</label>
            <input type="text" 
                     className="w-full border hover:bg-blue-400 p-4 my-4"
                     onChange={handleOnChange} 
                     value={search.input}
                     placeholder="Enter ticker symbol" />
            <br />
            <input type="submit" 
                     className="w-full p-4 bg-blue-500 mt-4 hover:bg-blue-700 
                     transition-all duration-200"
                     value="Search" />
         </form>

         {/* render user searched stock */}
         {search.results.Symbol ?
            <Stock key={search.results.id} 
                     currentUser={props.user}
                     tickerSymbol={search.results.Symbol}
                     name={search.results.Name}
                     pricePerShare={search.results['50DayMovingAverage']}
                     fetchPortfolioStocks={props.dispatchFetchPortfolioStocks}
                     portfolio={props.portfolio}
                     isSearchedStock={true} />
            : null 
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
      dispatchFetchPortfolioStocks: (portfolio, stock) => 
         dispatch(fetchPortfolioStocks(portfolio, stock))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockSearchForm)
