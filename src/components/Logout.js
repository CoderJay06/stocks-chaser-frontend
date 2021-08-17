import React from 'react';

const Logout = ({ user, dispatchFetchLogout, dispatchRemovePortfolio }) => {
   // send request to backend to delete session
   const handleOnClick = (user) => {
      dispatchFetchLogout(user)
      dispatchRemovePortfolio()
   }

   return (
      <div>
         <button 
            className="w-2/4 p-4 bg-blue-300 mt-4 hover:bg-blue-400 
               transition-all duration-200" 
            onClick={() => handleOnClick(user)}>Logout</button>
      </div>
   )
}

export default Logout;
