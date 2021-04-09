import React from 'react';
import { connect } from 'react-redux';

export const Stock = ({stock, tickerSymbol, name, pricePerShare, addStock}) => {
   const handleViewOnClick = () => {
      // will render selected stock view page
      debugger
   }

   const handleAddOnClick = () => {
      // need to handle adding stock to users portfolio
      console.log('Add clicked')
      addStock(stock)
   }

   return (
      <div >
         <h4>Stock</h4>
         <p>Ticker: {tickerSymbol}</p>
         <p>Name: {name}</p>
         <p>Share Price: ${pricePerShare}</p>
         <button onClick={handleViewOnClick}
                 className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-100 transition-all duration-200"
         >View</button>
         <button onClick={handleAddOnClick}
                 className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-100 transition-all duration-200"
         >Add
         </button>
         <br />
      </div>
   )
}

const mapStateToProps = state => {
   return {
      portfolio: state.portfolio
   }
}

export default connect(mapStateToProps, null)(Stock);



