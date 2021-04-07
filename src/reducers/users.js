// import { ADD_USER } from '../actions/users';

// const initialState = {
//    users: {
//       all: []
//    }
// };
const initialState = {
   all: []
};

export default function usersReducer(state = initialState, action) {
   switch (action.type) {
      case "ADD_USER":
         // return new state object with new user
         // return {
         //    ...state,
         //    users: {
         //       all: [...state.users.all.concat([action.payload])]
         //    }
         // }
         // debugger
         return {
            ...state,
            all: [...state.all.concat([action.payload])]
         }
      default: 
         break;
   }

   return state;
}

