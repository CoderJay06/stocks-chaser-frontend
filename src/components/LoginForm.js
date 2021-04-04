import React, { Component } from 'react';

class LoginForm extends Component {
   state = {
      user: {
         username: '',
         password: ''
      },
      isLoggedIn: false
   };

   handleOnChange = event => {
      const { user } = {...this.state};
      const userInput = event.target.value;
      const currentState = user;
      currentState[event.target.name] = userInput;

      // update local state with user input
      this.setState({ user: currentState })
   }

   handleOnSubmit = event => {
      event.preventDefault();
   }

   render() {
      return (
         this.state.isLoggedIn ?
            null // redirect to user profile if already logged in
            :
            <div>
               <form className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6"
                     onSubmit={this.handleOnSubmit}>
                  <label htmlFor="username">Username</label>
                  <input name="username" 
                        type="text" 
                        value={this.state.user.username}
                        onChange={this.handleOnChange} 
                        placeholder="Enter a username"
                        className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" />
                  <br />
                  <label htmlFor="password">Password</label>
                  <input name="password" 
                        type="password" 
                        value={this.state.user.password}
                        onChange={this.handleOnChange} 
                        placeholder="Enter a password"
                        className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" />
                  <br />
                  <input type="submit"
                        value="Login"
                        className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" />
               </form>
               {this.state.user.username}
               {this.state.user.password}
            </div>
      )
   }
}

export default LoginForm;