
const initialState = {
   loginStatus: 'notLoggedIn',
   user: {
      username: '',
      password: '' 
   }
}

export default function loginReducer(state = initialState, action) {
   switch (action.type) {
      case "LOGIN_USER":
         return {
            ...state,
            loginStatus: true,
            user: action.payload
         }
      default: 
         break;
   }
   return state;
}