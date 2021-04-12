import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ViewStockChart = () => {
   const location = useLocation();

   useEffect(() => {
      console.log(location.state)
   }, [location]);
   
   return (
      <div>
         {console.log('props in viewStockChart ', )}
         {/* show stocks chart data */}
      </div>
   )
}

export default ViewStockChart;