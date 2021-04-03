// Action using redux thunk to fetch stocks
import { START_LOADING_STOCKS } from '../actions/stocks'; 

export function fetchStocks() {
   const url = "http://localhost:3000/api/v1/stocks"
   const configStocksObj = {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         }
   };

   return (dispatch) => {
      dispatch({type: START_LOADING_STOCKS})
      fetch(url, configStocksObj)
         .then(response => response.json())
         .then(stocksData => dispatch({type: "ADD_STOCKS", payload: stocksData}));
   };
}