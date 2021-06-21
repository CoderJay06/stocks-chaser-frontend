import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import logo from './styles/Logo';

class App extends Component {
   render() {
      return (
         <div className="App" 
              style={logo}>
            <Navbar />
         </div>
       );
   }

}

export default App;
