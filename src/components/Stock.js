import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import ViewStockChart from './ViewStockChart';

export const Stock = ({stock, tickerSymbol, name, pricePerShare, addStock, isSearchedStock}) => {
   const history = useHistory();

   const handleViewOnClick = () => {
      // will render selected stock view page
      // debugger
      // event.preventDefault();
      // <Redirect to="/stock-chart">
      //    <ViewStockChart stock={stock} />
      // </Redirect>
      history.push({
         pathname: "/stock-chart",
         state: { stock: stock }
      });
   }

   const handleAddOnClick = () => {
      // need to handle adding stock to users portfolio
      console.log('Add clicked')
      addStock(stock)
   }

   return (
      <div className="max-w-6xl w-2/4 mx-auto mt-16 shadow-lg px-4 py-6">
         <h4>Stock</h4>
         <p>Ticker: {tickerSymbol}</p>
         <p>Name: {name}</p>
         <p>Share Price: ${pricePerShare}</p>
         <button onClick={handleViewOnClick}
                 className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200"
         >View</button>
         {
            isSearchedStock ?
               <button onClick={handleAddOnClick}
                     className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200"
               >Add
               </button>
               :
               null
         }
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



