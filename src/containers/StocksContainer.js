import React, { Component } from 'react';

class StocksContainer extends Component {
   state = {
      stocks: [],
      loading: true
   };

   componentDidMount() {
      // fetch stocks from 'http://localhost:3000/api/v1/stocks'
      const stocksUrl = "http://localhost:3000/api/v1/stocks";

      fetch(stocksUrl, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         }
      }).then(response => response.json())
        .then(stocksData => {
           this.setState({
            stocks: stocksData,
            loading: false
           })
        });  
   }

   render() {
      return (
         <div>
            {console.log('current state: ', this.state)}
            StocksContainer
         </div>
      )
   }
};

// set default props ?

export default StocksContainer;