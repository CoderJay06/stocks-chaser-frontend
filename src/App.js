import React, { Component } from 'react';
import StocksContainer from './containers/StocksContainer';
import StockSearchForm from './components/StockSearchForm';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   NavLink
 } from "react-router-dom";

class App extends Component {

   render() {
      return (
         <div className="App">
            <Router>
               <nav className="text-center bg-blue-500 text-black-100 p-4">
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
                     {/* <Signup /> */}
                  </Route>   
                  <Route path="/login">
                     {/* <Login /> */}
                  </Route>  
                  <Route exact path="/">
                     {/* <Home /> */}
                  </Route>            
               </Switch>
            </Router>
         </div>
       );
   }

}

export default App;
