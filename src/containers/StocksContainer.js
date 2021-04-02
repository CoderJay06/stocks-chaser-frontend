import React, { Component } from 'react';
import { Stocks } from '../components/Stocks';

class StocksContainer extends Component {
   _isMounted = false; // temp fix to prevent unmounted component error

   state = {
      stocks: [],
      loading: true
   };

   setStocksState = stocksData => {
      if (this._isMounted) { 
         this.setState({
            stocks: stocksData,
            loading: false
         });
      }
   }

   fetchStocksData = (stocksUrl, configObj) => {
      fetch(stocksUrl, configObj)
        .then(response => response.json())
        .then(stocksData => {
           this.setStocksState(stocksData)
        });  
   }

   componentDidMount() {
      this._isMounted = true;
      // fetch stocks from 'http://localhost:3000/api/v1/stocks'
      const stocksUrl = "http://localhost:3000/api/v1/stocks";
      const configStocksObj = {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
            }
      };

      this.fetchStocksData(stocksUrl, configStocksObj);
   }

   componentWillUnmount() {
      this._isMounted = false;
   }

   render() {
      return (
         <div>
            {console.log('current state: ', this.state)}
            StocksContainer
            {/* Render stocks when not loading */}
            <br />
            {this.state.loading ?
               "Loading stocks..."
               :
               <Stocks stocks={this.state.stocks} />}
         </div>
      )
   }
};

// set default props ?

export default StocksContainer;