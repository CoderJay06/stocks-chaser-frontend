import {
   START_LOADING_STOCKS,
   SUCCESSFULLY_LOADED_STOCKS,
   ERROR_LOADING_STOCKS
} from '../actions/stocks';

const initialState = {
   loadingState: "notLoading",
   all: []
}

export default function stocksReducer(state = initialState, action) {
   switch (action.type) {
      case START_LOADING_STOCKS:
         return {
            ...state, loadingState: "loading"
         }
      case SUCCESSFULLY_LOADED_STOCKS:
         return {
            ...state, 
            loadingState: "loaded",
            all: action.payload
         }
      case ERROR_LOADING_STOCKS:
         return {
            ...state,
            loadingState: "errorLoading",
            all: action.payload
         }
      default: 
         break;
   }
   return state;
}
