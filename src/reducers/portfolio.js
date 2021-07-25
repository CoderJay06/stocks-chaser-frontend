import {
   START_LOADING_PORTFOLIO,
   ERROR_LOADING_PORTFOLIO,
   ADD_PORTFOLIO,
   ADD_EXISTING_PORTFOLIO,
   VIEW_PORTFOLIO,
   REMOVE_PORTFOLIO,
   ADD_STOCK
} from "../actions/portfolio";

const initialState = {
   status: "",
   stocks: []
};

export default function portfolioReducer(state = initialState, action) {
   switch (action.type) {
      case START_LOADING_PORTFOLIO:
         return {
            ...state,
            status: "loading"
         }
      case ERROR_LOADING_PORTFOLIO:
         return {
            ...state,
            status: "error"
         }
      case ADD_PORTFOLIO:
         return {
            id: action.payload.id,
            user_id: action.payload.user_id,
            stock_quantity: action.payload.stock_quantity,
            ...state
         }
      case ADD_EXISTING_PORTFOLIO:
         return {
            id: action.payload.id,
            user_id: action.payload.user_id,
            stock_quantity: action.payload.stock_quantity,
            stocks: action.payload.stocks
         }
      case VIEW_PORTFOLIO:
         return {
            ...state
         }
      case REMOVE_PORTFOLIO:
         return initialState;
      case ADD_STOCK:
         return {
            ...state,
            stock_quantity: state.stock_quantity + 1,
            stocks: [...state.stocks.concat([action.payload])]
         }
      default:
         break;
   }
   return state;
}