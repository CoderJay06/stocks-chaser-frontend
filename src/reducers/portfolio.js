
const initialState = {
   portfolio: [],
   stocks: []
};

export default function portfolioReducer(state = initialState, action) {
   switch (action.type) {
      case "ADD_PORTFOLIO":
         debugger
         return {
            ...state.portfolio.concat([action.payload])
         }
      default:
         break;
   }
   return state;
}