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
         // return previous state and loading status
         return {
            ...state, loadingState: "loading"
         }
      default: 
         break;
   }
   return state;
}