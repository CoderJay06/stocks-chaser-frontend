import React, { useLayoutEffect } from 'react';
import { Stocks } from '../components/Stocks';
import { connect } from 'react-redux';
import { fetchStocks } from '../actions/fetchStocks';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function StocksContainer(props) {
   const { dispatchFetchStocks } = props;

   useLayoutEffect(() => {
      
      // get all stocks from the db
      dispatchFetchStocks();
   }, [dispatchFetchStocks]);

   if (props.loadingState === "notLoading") return null;

   return (
      <div>
         <br />
         {/* render stocks once loading is successfull */}
         {props.loadingState === "loading" ?
            <Loader
               type="Watch"
               color="#00BFFF"
               height={80}
               width={80}
            />
            :
            <Stocks stocks={props.stocks} />}
      </div>
   )
};

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
