
const initialState = {
   portfolio: [],
   stocks: []
};

export default function portfolioReducer(state = initialState, action) {
   switch (action.type) {
      case "ADD_PORTFOLIO":
         return {
            ...state.portfolio.concat([action.payload])
         }
      case "VIEW_PORTFOLIO":
         return {
            ...state.portfolio
         }
      default:
         break;
   }
   return state;
}