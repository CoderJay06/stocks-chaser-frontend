import React from 'react';

export const Stock = ({tickerSymbol, name, pricePerShare}) => {
   const handleOnClick = () => {
      // will render selected stock view page
      debugger
   }

   return (
      <div >
         <h4>Stock</h4>
         <p>Ticker: {tickerSymbol}</p>
         <p>Name: {name}</p>
         <p>Share Price: ${pricePerShare}</p>
         <button onClick={handleOnClick}
                 className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-100 transition-all duration-200"
         >View</button>
         <br />
      </div>
   )
}