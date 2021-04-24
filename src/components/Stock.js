import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const Stock = ({
   stock,
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
      console.log('stock ', stock)
   
      history.push({
         pathname: `/stocks/${tickerSymbol}/stock-chart`,
         state: { ticker: tickerSymbol }
      });
   }

   const handleAddOnClick = () => {
      // handle adding stock to users portfolio
      // TODO:
      // id is undefined when searched stock
      // where going to need to add it to backend stocks db
      // to create a new id beforehand ?
      const stock = {
         ticker: tickerSymbol,
         name: name,
         price_per_share: Number(pricePerShare)
      };
      // debugger
      // TODO: need to save stocks to user portfolio on backend when adding
      console.log('a')
      fetchPortfolioStocks(portfolio, stock);
      console.log('g')
      history.push({
         pathname: "/profile"
      });
   }

   return (
      <div className="max-w-6xl w-2/4 mx-auto mt-16 shadow-lg 
         hover:bg-green-500 hover:bg-opacity-75 px-4 py-6">
         <h4>Stock</h4>
         <p>Ticker: {tickerSymbol}</p>
         <p>Name: {name}</p>
         <p>Share Price: ${pricePerShare}</p>
         <button onClick={handleViewOnClick}
                 className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 
                  transition-all duration-200">View</button>
         {
         // we only want to show this button for stocks that can be added to portfolio 
         isSearchedStock ?
            <button onClick={handleAddOnClick}
                    className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 
                     transition-all duration-200">Add</button>
            : null
         }
         <br />
      </div>
   )
}

export default Stock;

