import React from 'react';
import { Stock } from '../components/Stock'; 

// stateless functional component for rendering Stocks from db
export const Stocks = (props) => {
   const { stocks } = props;
   console.log('props stocks', props)
   console.log('Stocks: ', stocks)
   const renderStocks = stocks.map(stock => {
      return (
         <Stock key={stock.ticker} 
                stock={stock}
                tickerSymbol={stock.ticker}
                name={stock.name}
                pricePerShare={stock.price_per_share}
          />
      )
   });

   return (
      <div className="max-w-6xl w-2/4 mx-auto mt-16 shadow-2xl 
         hover:bg-green-400 hover:bg-opacity-25 text-black-100 px-4 py-6">
         <h2>Stocks</h2>
         {renderStocks}
      </div>
   )
}
