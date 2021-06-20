import React from 'react';
import { useHistory } from 'react-router-dom';

export const Stock = ({
   currentUser,
   tickerSymbol, 
   name, 
   pricePerShare, 
   fetchPortfolioStocks,
   portfolio,
   isSearchedStock
}) => {
   const history = useHistory();

   const handleViewOnClick = () => {
      // will render selected stock view page
      history.push({
         pathname: `/stocks/${tickerSymbol}/chart`,
         state: { ticker: tickerSymbol }
      });
   }

   const handleAddOnClick = () => {
      // handle adding stock to users portfolio
      const stock = {
         ticker: tickerSymbol,
         name: name,
         price_per_share: Number(pricePerShare)
      };
      fetchPortfolioStocks(portfolio, stock);

      // direct to user's profile after adding stock
      history.push({
         pathname: `/profile/${currentUser.id}`
      });
   }

   return (
      <div className="max-w-6xl w-2/4 mx-auto mt-16 rounded-lg shadow-2xl bg-green-700 bg-opacity-80 
         hover:bg-green-900 hover:bg-opacity-75 text-white-200 px-4 py-6">
         <p>Ticker: {tickerSymbol}</p>
         <p>Name: {name}</p>
         <p>Share Price: ${pricePerShare}</p>
         <button onClick={handleViewOnClick}
                 className="w-full p-4 bg-blue-500 mt-4 hover:bg-blue-700 
                  transition-all duration-200">View</button>
         {
         // we only want to show this button for stocks that can be added to portfolio 
         isSearchedStock ?
            <button onClick={handleAddOnClick}
                    className="w-full p-4 bg-blue-500 mt-4 hover:bg-blue-700 
                     transition-all duration-200">Add</button>
            : null
         }
         <br />
      </div>
   )
}

export default Stock;
