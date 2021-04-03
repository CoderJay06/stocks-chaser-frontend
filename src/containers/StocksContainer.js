import React, { Component } from 'react';
import { Stocks } from '../components/Stocks';
import { connect } from 'react-redux';
import { fetchStocks } from '../actions/fetchStocks';

class StocksContainer extends Component {
   // _isMounted = false; // temp fix to prevent unmounted component error

   // state = {
   //    stocks: [],
   //    loading: true
   // };

   componentDidMount() {
      this.props.dispatchFetchStocks()
   }

   // setStocksState = stocksData => {
   //    if (this._isMounted) { 
   //       this.setState({
   //          stocks: stocksData,
   //          loading: false
   //       });
   //    }
   // }

   // fetchStocksData = (stocksUrl, configObj) => {
      
   //    fetch(stocksUrl, configObj)
   //      .then(response => response.json())
   //      .then(stocksData => {
   //         this.setStocksState(stocksData)
   //      });  
   // }

   // componentDidMount() {
   //    this._isMounted = true;
   //    // fetch stocks from 'http://localhost:3000/api/v1/stocks'
   //    const stocksUrl = "http://localhost:3000/api/v1/stocks";
   //    const configStocksObj = {
   //          method: "GET",
   //          headers: {
   //             "Content-Type": "application/json",
   //             "Accept": "application/json"
   //          }
   //    };

   //    this.fetchStocksData(stocksUrl, configStocksObj);
   // }

   // componentWillUnmount() {
   //    this._isMounted = false;
   // }

   render() {
      return (
         <div>
            {/* {console.log('current state: ', this.state)} */}
            StocksContainer
            {/* Render stocks when not loading */}
            <br />
            {this.props.loadingState === "loading" ?
               "Loading stocks..."
               :
               <Stocks stocks={this.props.stocks} />}
            {console.log('StocksContainer props: ', this.props.stocks)}
         </div>
      )
   }
};

// map state and dispatch to props
const mapStateToProps = state => {
   return {
      stocks: state.stocks.all,
      loadingState: state.stocks.loadingState
   }
}

const mapDispatchToProps = dispatch => {
   return {
      dispatchFetchStocks: () => dispatch(fetchStocks())
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(StocksContainer);