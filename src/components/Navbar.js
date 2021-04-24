import React from 'react';
import Routes from './Routes';
import NavLinks from './NavLinks';
import {
   BrowserRouter as Router,
   Switch
 } from "react-router-dom";

 export const Navbar = () => {
    return (
      <Router>
         <NavLinks />
         <Switch>
            <Routes />    
         </Switch>
      </Router>
    )
 } 