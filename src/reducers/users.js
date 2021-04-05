// import { ADD_USER } from '../actions/users';

const initialState = {
   users: {
      all: []
   }
};

export default function usersReducer(state = initialState, action) {
   switch (action.type) {
      case "ADD_USER":
         // return new state object with user
         return {
            ...state.users.all.concat([action.payload])
         }
      default: 
         break;
   }

   return state;
}

