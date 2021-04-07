
const initialState = {
   status: 'notLoggedIn',
   user: {
      username: ''
   }
}

export default function loginReducer(state = initialState, action) {
   switch (action.type) {
      case "LOGIN_USER":
         return {
            status: "loggedIn",
            user: action.payload
         }
      case "LOGOUT_USER":
         return {
            status: "loggedOut"
         }
      default: 
         break;
   }
   return state;
}