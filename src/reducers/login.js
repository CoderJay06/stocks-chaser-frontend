import { 
   LOGIN, 
   LOGOUT,
   START_LOADING_USER,
   ERROR_LOADING_USER} from "../actions/users";

const initialState = {
   status: 'notLoggedIn',
   error: '',
   user: {
      username: ''
   }
}

export default function loginReducer(state = initialState, action) {
   switch (action.type) {
      case LOGIN:
         return {
            status: "loggedIn",
            user: action.payload
         }
      case LOGOUT:
         return {
            status: "loggedOut"
         }
      case START_LOADING_USER:
         return {
            ...state,
            status: "loading_user"
         }
      case ERROR_LOADING_USER:
         return {
            ...state,
            status: "error_loading_user",
            error: action.payload
         }
      default: 
         break;
   }
   return state;
}