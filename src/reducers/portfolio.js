
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
      case "VIEW_PORTFOLIO":
         return {
            ...state
         }
      case "ADD_STOCK":
         // debugger
         return {
            // need update add stock to users portfolio here
            ...state,
            stock_quantity: state.stock_quantity + 1,
            stocks: [...state.stocks.concat([action.payload])]
         }
      default:
         break;
   }
   return state;
}