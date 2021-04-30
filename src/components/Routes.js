import React from 'react';
import StocksContainer from '../containers/StocksContainer';
import StockSearchForm from '../components/StockSearchForm';
import ViewStockChart from '../components/ViewStockChart';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import UserProfileContainer from '../containers/UserProfileContainer';
import LogoutContainer from '../containers/LogoutContainer';

import {
   Route
 } from "react-router-dom";

export const Routes = () => {

   return (
      <>
         <Route path="/signup">
            <SignupForm />
         </Route>   
         <Route path="/login">
            <LoginForm />
         </Route>  
         <Route path="/logout">
            {/* <LogoutContainer /> */}
         </Route>
         <Route path="/profile/:id">
            <UserProfileContainer />
         </Route>    
         <Route path="/stocks/:ticker/stock-chart">
            <ViewStockChart />
         </Route>  
         <Route path="/stocks">
            <StocksContainer />
         </Route> 
         <Route path="/search">
            <StockSearchForm />
         </Route>  
         <Route exact path="/">
            {/* <Home /> */}
         </Route>   
      </>     
   )
}

export default Routes;
