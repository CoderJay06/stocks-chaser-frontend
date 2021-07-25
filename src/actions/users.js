// users actions
export const loginUser = user => {
   return {
      type: "LOGIN_USER",
      payload: user
   }
};

export const logoutUser = user => {
   return {
      type: "LOGOUT_USER",
      payload: user
   }
};

export const loginError = error => {
   return {
      type: "ERROR_LOADING_USER",
      payload: error
   }
}

// types
export const LOGIN = "LOGIN_USER";
export const LOGOUT = "LOGOUT_USER";

// user actions for loading statuses
export const START_LOADING_USER = "START_LOADING_USER";
export const ERROR_LOADING_USER = "ERROR_LOADING_USER";