import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchSignup } from '../actions/fetchUsers';
import { Redirect } from 'react-router-dom';
import UserProfileContainer from '../containers/UserProfileContainer';

function SignupForm(props) {
   const [ newUser, setNewUser ] = useState({
      email: '',
      username: '',
      password: ''
   })

   const handleOnChange = event => {
      const { name: newUserCredential, value: newUserInput } = event.target;
      setNewUser({ 
         ...newUser,
         [newUserCredential]: newUserInput
      });
   }

   const handleOnSubmit = event => {
      event.preventDefault();
      
      // signup user and reset user state
      props.fetchSignup(newUser);
      setNewUser({
            email: '',
            username: '',
            password: ''
      });
   }

   return (
      // redirect to profile if already signed up, otherwise render form        
      props.status === "loggedIn" ?
         <Redirect to={`/profile/${props.currentUser.id}`}>
            <UserProfileContainer />
         </Redirect>
         :
         <div>
            <form className="max-w-6xl w-2/4 mx-auto mt-16 rounded-lg shadow-2xl bg-green-600 
               bg-opacity-75 hover:bg-green-700 hover:bg-opacity-80 px-4 py-6"
                  onSubmit={handleOnSubmit}>
               <label htmlFor="email">Email</label>
               <input name="email" 
                        type="email" 
                        value={newUser.email}
                        onChange={handleOnChange} 
                        placeholder="Enter your email"
                        className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 
                        transition-all duration-200" />
               <br />
               <label htmlFor="username">Username</label>
               <input name="username" 
                        type="text" 
                        value={newUser.username}
                        onChange={handleOnChange} 
                        placeholder="Enter a username"
                        className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 
                        transition-all duration-200" />
               <br />
               <label htmlFor="password">Password</label>
               <input name="password" 
                        type="password" 
                        value={newUser.password}
                        onChange={handleOnChange} 
                        placeholder="Enter a password"
                        className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 
                        transition-all duration-200" />
               <br />
               <input type="submit"
                        value="Signup"
                        className="w-full p-4 bg-blue-500 mt-4 hover:bg-blue-700 shadow-xl 
                        transition-all duration-200" />
            </form>
         </div>
   )
}

const mapStateToProps = state => {
   return {
      status: state.login.status,
      currentUser: state.login.user
   }
}

export default connect(mapStateToProps, { fetchSignup })(SignupForm);
