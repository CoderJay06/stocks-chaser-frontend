// Actions using redux thunk to fetch stocks
import { 
   START_LOADING_STOCKS, 
   SUCCESSFULLY_LOADED_STOCKS,
   ERROR_LOADING_STOCKS
} from '../actions/stocks'; 

export function fetchStocks() {
   const url = "https://stocks-chaser.herokuapp.com/api/v1/stocks"
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
         .then(stocksData => dispatch({
            type: SUCCESSFULLY_LOADED_STOCKS, 
            payload: stocksData
         }))
         .catch(error => {
            dispatch({
               type: ERROR_LOADING_STOCKS,
               payload: error 
            })
         });
   };
}

