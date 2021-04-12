import React, { Component } from 'react';
import { Stock } from '../components/Stock';
import { connect } from 'react-redux';
import { addStock } from '../actions/portfolio';

class StockSearchForm extends Component {
   _APIKEY = process.env.REACT_APP_STOCKS_API_KEY;
   state = {
      searchInput: '',
      searchResults: []
   }

   handleOnChange = event => {
      this.setState({
         searchInput: event.target.value.toUpperCase()
      });
   }

   handleOnSubmit = event => {
       // fetch searched stock by current state
      event.preventDefault();

      const searchQuery = 
         `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${this.state.searchInput}` +
            `&apikey=${this._APIKEY}`
      fetch(searchQuery, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         }
      }).then(response => response.json())
        .then(stockData => {
         //   debugger
            this.setState({
               searchInput: '',
               searchResults: stockData
            })
        });

   }

   render() {
      return (
         <div>
            <form onSubmit={this.handleOnSubmit}
                  className="max-w-6xl w-2/4 mx-auto mt-16 shadow-lg px-4 py-6"
             >
               <label>Search a Stock</label>
               <input type="text" 
                      className="w-full border p-4 my-4"
                      onChange={this.handleOnChange} 
                      value={this.state.searchInput}
                      placeholder="Enter ticker symbol" />
               <br />
               <input 
                  type="submit" 
                  className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200"
                  value="Search" />
            </form>
            {console.log(this.state.searchResults)}
            {console.log(this.state.searchResults.Symbol)}
            {this.state.searchResults.Symbol ?
               <Stock key={this.state.searchResults.id} 
                      stock={this.state.searchResults}
                      tickerSymbol={this.state.searchResults.Symbol}
                      name={this.state.searchResults.Name}
                      pricePerShare={this.state.searchResults['50DayMovingAverage']}
                      addStock={this.props.dispatchAddStock}
                      isSearchedStock={true} />
               : null 
            }
         </div>
      )
   }
}

const mapDispatchToProps = dispatch => {
   return {
      dispatchAddStock: stock => dispatch(addStock(stock))
   }
}

export default connect(null, mapDispatchToProps)(StockSearchForm)
