import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Charts from "../Charts";

export const ViewStockChart = () => {
   const location = useLocation();

   useEffect(() => {
      console.log(location.state)
   }, [location]);
   
   return (
      <div>
         <h1>{location.state.stock.name}</h1>
         {/* <Charts stockData={location.state.stock} /> */}
      </div>
   )
}

export default ViewStockChart;