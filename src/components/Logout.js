import React from 'react';

const Logout = ({user, dispatchLogout}) => {
   // need send request to backend to delete session
   const handleOnClick = (user) => {
      // need to fetch user and delete session
      const url = "http://localhost:3000/sessions";
      const userConfigObj = {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify({username: user})
      }
      console.log('user config obj: ', userConfigObj);
      fetch(url, userConfigObj) // logout of session
      // debugger
      dispatchLogout(user)
   }
   // setup onclick action to logout user
   return (
      <div>
         <button 
            className="w-half p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" 
            onClick={() => handleOnClick(user)}
         >
         Logout
         </button>
         {console.log('props inside Logout: ', user)}
      </div>
   )
}

export default Logout;