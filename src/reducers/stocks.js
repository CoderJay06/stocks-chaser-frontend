import {
   START_LOADING_STOCKS,
   SUCCESSFULLY_LOADED_STOCKS,
   ERROR_LOADING_STOCKS,
   ADD_STOCKS
} from '../actions/stocks';

const initialState = {
   loadingState: "notLoading",
   all: []
}

export default function stocksReducer(state = initialState, action) {
   switch (action.type) {
      case START_LOADING_STOCKS:
         // return previous state with updated loading status
         return {
            ...state, loadingState: "loading"
         }
      case ADD_STOCKS:
         // return new state object with added stock data and new loading status
         return {
            ...state, 
            loadingState: "loaded",
            all: action.payload
         }
      default: 
         break;
   }
   return state;
}