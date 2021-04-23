// actions to handle portfolio requests to the backend
import { addPortfolio, addStock } from '../actions/portfolio';

export function fetchPortfolios(user) {
   return (dispatch) => {
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
         })
   }
} 

export function fetchPortfolioStocks(portfolio, stock) { 
   console.log('b')
   return (dispatch) => {
      console.log('c')
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
      // a, b, c, e, g, d 
      console.log(portfolioStockConfigObj.body)
      fetch(portfolioStocksUrl, portfolioStockConfigObj)
         .then(response => response.json())
         .then(data => {
            console.log('data', data)
            // debugger
            console.log('d')
            dispatch(addStock(data.stock));
         })
         .catch(error => {
            // handle error
            alert(error.message)
         })
      console.log('e')
   }
   console.log('f')
}





