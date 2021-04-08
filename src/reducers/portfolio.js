
const initialState = {
   stocks: []
};

export default function portfolioReducer(state = initialState, action) {
   switch (action.type) {
      case "ADD_PORTFOLIO":
         console.log('state: ', state, '\naction:', action);
 
         return {
            id: action.payload.id,
            user_id: action.payload.id,
            stock_quantity: action.payload.stock_quantity,
            ...state
         }
      case "VIEW_PORTFOLIO":
         return {
            ...state
         }
      default:
         break;
   }
   return state;
}