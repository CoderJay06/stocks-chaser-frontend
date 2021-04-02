import React from 'react';

export const Stock = ({tickerSymbol, name, pricePerShare}) => {
   const handleOnClick = () => {
      // will render selected stock view page
      debugger
   }

   return (
      <div className="stock-container">
         <h4>Stock</h4>
         <p>Ticker: {tickerSymbol}</p>
         <p>Name: {name}</p>
         <p>Share Price: ${pricePerShare}</p>
         <button onClick={handleOnClick}>View</button>
         <br />
      </div>
   )
}