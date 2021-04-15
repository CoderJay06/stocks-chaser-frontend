import React from 'react';
import StocksContainer from '../containers/StocksContainer';
import StockSearchForm from '../components/StockSearchForm';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import UserProfileContainer from '../containers/UserProfileContainer';
import ViewStockChart from '../components/ViewStockChart';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   NavLink
 } from "react-router-dom";

 export const Navbar = () => {
    return (
      <Router>
         <nav className="text-center bg-blue-500 text-green-100 p-4">
            <NavLink
               className="inline-block px-4 py-2"
               exact to="/stocks">
               Stocks
            </NavLink>
            <NavLink
               className="inline-block px-4 py-2"
               exact to="/search">
               Search a Stock
            </NavLink>
            <NavLink
               className="inline-block px-4 py-2"
               exact to="/signup">
               Signup
            </NavLink>
            <NavLink
               className="inline-block px-4 py-2"
               exact to="/login">
               Login
            </NavLink>
            <NavLink
               className="inline-block px-4 py-2"
               exact to="/profile">
               Profile
            </NavLink>
            <NavLink
               className="inline-block px-4 py-2"
               exact to="/">
               Home
            </NavLink>
         </nav>
         <Switch>
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
         </Switch>
      </Router>
    )
 } 