import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Charts from "../Charts";

export const ViewStockChart = () => {
   const location = useLocation();

   useEffect(() => {
   }, [location]);
   
   return (
      <div>
         <h1>{location.state.ticker}</h1>
         {/* <Charts stockTickerSymbol={location.state.ticker} /> */}
      </div>
   )
}

export default ViewStockChart;