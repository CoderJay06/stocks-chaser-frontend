import React, { Component } from 'react';

class SignupForm extends Component {
   state = {
      user: {
         email: '',
         username: '',
         password: ''
      }
   };

   render() {
      return (
         <div>
            <form className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6">
               <label htmlFor="email">Email</label>
               <input name="email" 
                      type="email" 
                      value={this.state.user.email} 
                      placeholder="Enter your email"
                      className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" />
               <br />
               <label htmlFor="username">Username</label>
               <input name="username" 
                      type="text" 
                      value={this.state.user.username} 
                      placeholder="Enter a username"
                      className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" />
               <br />
               <label htmlFor="password">Password</label>
               <input name="password" 
                      type="password" 
                      value={this.state.user.password} 
                      placeholder="Enter a password"
                      className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" />
               <br />
               <input type="submit"
                      value="Signup"
                      className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" />
            </form>
         </div>
      )
   }
}

export default SignupForm;