import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchLogin } from '../actions/fetchUsers';
import { Redirect } from 'react-router-dom'; 
import UserProfileContainer from '../containers/UserProfileContainer';
import Loader from "react-loader-spinner";

function LoginForm(props) {
   const [ user, setUser ] = useState({
         username: '',
         password: ''
   })

   const handleOnChange = event => {
      const { name: userCredential, value: userInput } = event.target;
      setUser({
         ...user,
         [userCredential]: userInput
      });
   }

   const handleOnSubmit = event => {
      event.preventDefault();

      // authenticate/login user and reset state
      props.fetchLogin(user)
      setUser({
            username: '',
            password: ''
      });
   }


   let errorMessage= null;
   let displayErrorMessage = false;
   if (props.status === "loading_user") {
      return (
            <Loader
               type="Watch"
               color="#00BFFF"
               height={80}
               width={80}
            />
      )
   } else if (props.status === "error_loading_user") {
      // display errors
      errorMessage = props.loginError
      displayErrorMessage = true;
   }
   return (    
      // when logged in redirect to user profile, otherwise render form  
      props.status === "loggedIn" ?
         <Redirect to={`/profile/${props.currentUser.id}`}>
            <UserProfileContainer />
         </Redirect>
         :
         <div>
            <form className="max-w-6xl w-2/4 mx-auto mt-16 rounded-lg shadow-2xl bg-green-600 
               bg-opacity-75 hover:bg-green-700 hover:bg-opacity-80 px-4 py-6"
                  onSubmit={handleOnSubmit}>
               {
                  displayErrorMessage ?
                     <div className="error-message" hidden>
                        <span className="error-text">{errorMessage}</span>
                     </div> : null
               }
               <label htmlFor="username">Username</label>
               <input name="username" 
                        type="text" 
                        value={user.username}
                        onChange={handleOnChange} 
                        placeholder="Enter a username"
                        className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" />
               <br />
               <label htmlFor="password">Password</label>
               <input name="password" 
                        type="password" 
                        value={user.password}
                        onChange={handleOnChange} 
                        placeholder="Enter a password"
                        className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" />
               <br />
               <input type="submit"
                        value="Login"
                        className="w-full p-4 bg-blue-500 mt-4 hover:bg-blue-700 shadow-xl 
                        transition-all duration-200" />
            </form>
         </div>
   )
}

const mapStateToProps = state => {
   return {
      status: state.login.status,
      loginError: state.login.error,
      currentUser: state.login.user
   }
}

export default connect(mapStateToProps, { fetchLogin })(LoginForm);