
const initialState = {
   stocks: []
};

export default function portfolioReducer(state = initialState, action) {
   switch (action.type) {
      case "ADD_PORTFOLIO":
         console.log('state: ', state, '\naction:', action);

         return {
            id: action.payload.id,
            user_id: action.payload.user_id,
            stock_quantity: action.payload.stock_quantity,
            ...state
         }
      case "ADD_EXISTING_PORTFOLIO":
         return {
            id: action.payload.id,
            user_id: action.payload.user_id,
            stock_quantity: action.payload.stock_quantity,
            stocks: action.payload.stocks
         }
      case "VIEW_PORTFOLIO":
         return {
            ...state
         }
      case "REMOVE_PORTFOLIO":
         return initialState;
      case "ADD_STOCK":
         // debugger
         console.log('add_stock state and payload', 
            state, action.payload)
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