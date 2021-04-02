import React, { Component } from 'react';
import StocksContainer from './containers/StocksContainer';

class App extends Component {

   // componentDidMount() {
      // http://127.0.0.1:3000/api/v1/stocks
   //    fetch('http://localhost:3000/api/v1/stocks', {
   //       method: 'GET',
   //       headers: {
   //          'Content-Type': 'application/json',
   //          'Accept': 'application/json'
   //       }
   //    })
   //    .then(res => res.text())
   //    .then(text => console.log(text))
   // }

   render() {
      return (
         <div className="App">
            App
            <StocksContainer />
         </div>
       );
   }

}

export default App;
