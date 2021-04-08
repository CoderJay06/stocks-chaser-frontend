import React from 'react';
import { Stock } from '../components/Stock'; 

// stateless functional component for rendering Stocks
export const Stocks = (props) => {
   const { stocks } = props;
   console.log('Stocks: ', stocks)
   const renderStocks = stocks.map(stock => {
      return (
         <Stock key={stock.id} 
                tickerSymbol={stock.ticker}
                name={stock.name}
                pricePerShare={stock.price_per_share}
          />
      )
   });

   return (
      <div className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6">
         {console.log('Stocks component props: ', props)}
         <h3>Stocks</h3>
         {renderStocks}
      </div>
   )
}
