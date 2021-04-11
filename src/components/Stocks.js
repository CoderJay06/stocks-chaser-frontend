import React from 'react';
import { Stock } from '../components/Stock'; 

// stateless functional component for rendering Stocks
export const Stocks = (props) => {
   const { stocks } = props;
   console.log('Stocks: ', stocks)
   const renderStocks = stocks.map(stock => {
      return (
         <Stock key={stock.id} 
                stock={stock}
                tickerSymbol={stock.ticker}
                name={stock.name}
                pricePerShare={stock.price_per_share}
                addStock={props.addStock}
          />
      )
   });

   return (
      <div className="max-w-6xl w-2/4 mx-auto mt-16 shadow-lg text-green-100 px-4 py-6">
         {console.log('Stocks component props: ', props)}
         <h2>Stocks</h2>
         {renderStocks}
      </div>
   )
}
