import React, { Component } from 'react';
import { Stocks } from '../components/Stocks';
import { connect } from 'react-redux';
import { fetchStocks } from '../actions/fetchStocks';
import { addStock } from '../actions/portfolio';
import { logo } from '../styles/Logo';

class StocksContainer extends Component {
   componentDidMount() {
      // get all stocks from the db
      this.props.dispatchFetchStocks()
   }

   render() {
         if (this.props.loadingState === "notLoading") return null;

         return (
            <div style={{
                  backgroundImage: logo.backgroundImage,
                  height: "auto",
                  backgroundPosition: "center",
                  backgroundRepeat: "repeat-y",
                  backgroundSize: "flex"}}>
               <br />
               {/* render stocks once loading is successfull */}
               {this.props.loadingState === "loading" ?
                  "Loading stocks..." 
                  :
                  <Stocks stocks={this.props.stocks} />}
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
      dispatchFetchStocks: () => dispatch(fetchStocks()),
      // dispatchAddStock: stock => dispatch(addStock(stock)) // need to pass down to make available to child
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(StocksContainer);