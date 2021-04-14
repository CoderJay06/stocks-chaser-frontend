// actions to handle portfolio requests to the backend
import { addPortfolio } from '../actions/portfolio';

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