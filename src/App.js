import React, { Component } from 'react';
import StocksContainer from './containers/StocksContainer';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   NavLink
 } from "react-router-dom";

class App extends Component {

   render() {
      return (
         <Router>
            <div className="App">
               <nav className="text-center bg-blue-900 text-white-100 p-4">
                  <NavLink
                     className="inline-block px-4 py-2"
                     activeClassName="text-white-300"
                     exact to="/stocks">
                     Stocks
                  </NavLink>
                  <NavLink
                     className="inline-block px-4 py-2"
                     activeClassName="text-white-300"
                     exact to="/signup">
                     Signup
                  </NavLink>
                  <NavLink
                     className="inline-block px-4 py-2"
                     activeClassName="text-white-300"
                     exact to="/login">
                     Login
                  </NavLink>
               </nav>
               <Switch>
                  <Route exact path="/stocks">
                     <StocksContainer />
                  </Route>
               </Switch>
            </div>
         </Router>
       );
   }

}

export default App;
