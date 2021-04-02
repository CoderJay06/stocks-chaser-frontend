import React from 'react';

export const Stock = ({tickerSymbol, name, pricePerShare}) => {
   return (
      <div className="stock-container">
         <h4>Stock</h4>
         <p>Ticker: {tickerSymbol}</p>
         <p>Name: {name}</p>
         <p>Share Price: ${pricePerShare}</p>
         <br />
      </div>
   )
}