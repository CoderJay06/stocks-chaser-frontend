import { 
   START_LOADING_PORTFOLIO,
   portfolioError,
   addPortfolio, 
   addStock } from '../actions/portfolio';

// actions to handle portfolio requests to the backend
export function fetchPortfolios(user) {
   return (dispatch) => {
      dispatch({type: START_LOADING_PORTFOLIO});

      // post to backend, add new portfolio to the db
      const portfoliosUrl = "http://localhost:3000/api/v1/portfolios";
      const newPortfolio = {
         portfolio: {
            user_id: user.id,
            stock_quantity: 0
         }
      };
      const portfolioConfigObj = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify(newPortfolio)
      }
      fetch(portfoliosUrl, portfolioConfigObj)
         .then(response => response.json())
         .then(portfolioData => {
            // add newly created portfolio to the store
            dispatch(addPortfolio(portfolioData))
         })
         .catch(error => {
            // handle any errors for creating portfolio
            dispatch(portfolioError(error.message));
         })
   }
} 

export function fetchPortfolioStocks(portfolio, stock) { 
   return (dispatch) => {
      dispatch({type: START_LOADING_PORTFOLIO});
      const portfolioStocksUrl = "http://localhost:3000/api/v1/portfolio_stocks";
      const portfolioStockData = {
         portfolio_stock: {
            portfolio: portfolio,
            stock: stock
         }
      }
      const portfolioStockConfigObj = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify(portfolioStockData)
      };
      fetch(portfolioStocksUrl, portfolioStockConfigObj)
         .then(response => response.json())
         .then(data => {
            dispatch(addStock(data.stock));
         })
         .catch(error => {
            // handle error
            dispatch(portfolioError(error.message));
         })
   }
}
