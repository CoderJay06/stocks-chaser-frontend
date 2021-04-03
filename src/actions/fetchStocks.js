// Action using redux thunk to fetch stocks

function fetchStocks(url) {
   return (dispatch) => {
      dispatch({type: "START_LOADING_STOCKS"})
      fetch(url)
         .then(response => response.json())
         .then(stocksData => dispatch({type: "ADD_STOCKS", stocksData}));
   };
}