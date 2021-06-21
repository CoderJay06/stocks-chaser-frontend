import React from 'react';
import { Stock } from '../components/Stock'; 

export const Stocks = (props) => {
   const { stocks } = props;
  
   const renderStocks = stocks.map(stock => {
      return (
         <Stock key={stock.id} 
                stock={stock}
                tickerSymbol={stock.ticker}
                name={stock.name}
                pricePerShare={stock.price_per_share}
          />
      )
   });

   return (
      <div className="max-w-6xl w-3/4 mx-auto mt-8 rounded-lg bg-green-600 shadow-2xl
         bg-opacity-75 hover:bg-green-700 hover:bg-opacity-80 text-white-200 px-4 py-6">
         <h2 className="text-center">Stocks</h2>
         {renderStocks}
      </div>
   )
}
