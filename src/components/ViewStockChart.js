import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Chart from "react-stockcharts/lib/Chart";
import Charts from "../Charts";

export const ViewStockChart = () => {
   const location = useLocation();

   useEffect(() => {
   //  debugger
   }, [location]);
   
   return (
      <div>
         {console.log('props in viewStockChart ', location.state)}
         <h1>{location.state.ticker}</h1>
         <Charts stockTickerSymbol={location.state.ticker} />
      </div>
   )
}

export default ViewStockChart;