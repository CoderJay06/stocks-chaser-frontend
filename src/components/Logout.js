import React from 'react';

const Logout = ({user, dispatchFetchLogout}) => {
   // need to send request to backend to delete session
   const handleOnClick = (user) => {
      dispatchFetchLogout(user)
   }

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