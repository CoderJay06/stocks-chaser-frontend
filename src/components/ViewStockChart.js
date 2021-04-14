import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Chart from "react-stockcharts/lib/Chart";
import Charts from "../Charts";

export const ViewStockChart = () => {
   const location = useLocation();

   useEffect(() => {
      console.log(location.state)
   }, [location]);
   
   return (
      <div>
         {console.log('props in viewStockChart ', location.state)}
         {/* show stocks chart data */}
         <Charts stockData={location.state.stock} />
      </div>
   )
}

export default ViewStockChart;