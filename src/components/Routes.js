import React from 'react';
import StocksContainer from '../containers/StocksContainer';
import StockSearchForm from '../components/StockSearchForm';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import UserProfileContainer from '../containers/UserProfileContainer';
import ViewStockChart from '../components/ViewStockChart';
import {
   Route
 } from "react-router-dom";

export const Routes = () => {
   return (
      <>
         <Route path="/stocks">
            <StocksContainer />
         </Route> 
         <Route path="/search">
            <StockSearchForm />
         </Route>  
         <Route path="/signup">
            <SignupForm />
         </Route>   
         <Route path="/login">
            <LoginForm />
         </Route>  
         <Route path="/profile">
            <UserProfileContainer />
         </Route>  
         <Route path="/stock-chart">
            <ViewStockChart />
         </Route>    
         <Route exact path="/">
            {/* <Home /> */}
         </Route>   
      </>     
   )
}

export default Routes;
