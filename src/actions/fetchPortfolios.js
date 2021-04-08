// actions to handle portfolio requests to the backend

export function fetchPortfolios(user) {
   return (dispatch) => {
      // post to backend, add new portfolio to the db
      console.log('user inside fetch: ', user)
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
         .then(response => console.log(response))
   }
} 