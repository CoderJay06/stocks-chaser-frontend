import React from 'react';
import { redirect } from 'react-router-dom';

const Logout = ({username, dispatchLogout}) => {
   // need send request to backend to delete session
   const handleOnClick = (username) => {
      // need to fetch user and delete session
      const url = "http://localhost:3000/sessions";
      const userConfigObj = {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify({ username: username })
      }
      fetch(url, userConfigObj) // logout of session
      // debugger
      dispatchLogout(username)
   }
   // setup onclick action to logout user
   return (
      <div>
         <button 
            className="w-half p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" 
            onClick={() => handleOnClick(username)}
         >
         Logout
         </button>
         {console.log('props inside Logout: ', username)}
      </div>
   )
}

export default Logout;