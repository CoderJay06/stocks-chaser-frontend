// users actions

export const addUser = user => {
   return {
      type: "ADD_USER",
      payload: user
   }
};

export const loginUser = username => {
   return {
      type: "LOGIN_USER",
      payload: username
   }
};
