import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import logo from './styles/Logo';
import Charts from './Charts';

class App extends Component {

   render() {
      return (
         <div className="App" 
              style={logo}>
            <Navbar />
            {/* <Charts /> */}
         </div>
       );
   }

}

export default App;
