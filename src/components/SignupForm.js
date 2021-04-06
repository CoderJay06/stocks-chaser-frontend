import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, loginUser } from '../actions/users';

class SignupForm extends Component {
   state = {
      user: {
         email: '',
         username: '',
         password: ''
      }
   };

   handleOnChange = event => {
      // update state with user input
      const { user } = {...this.state};
      const currentUserState = user;
      const newUserInput = event.target.value;
      currentUserState[event.target.name] = newUserInput;

      this.setState({ user: currentUserState });
   }

   handleOnSubmit = event => {
      event.preventDefault();
      const usersUrl = "http://localhost:3000/api/v1/users";
      const configUsersObj = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify(this.state)
      };

      // signup user, add them to users db
      fetch(usersUrl, configUsersObj)
         .then(response => response.json())
      
      // update store with new user 
      this.props.addUser(this.state.user)
      
      // login user with their username and password
      const { username, password } = this.state.user;
      const user = {
         username: username,
         password: password
      };
      console.log(user)
      this.props.loginUser(user)
      
      // reset user state
      this.setState({
         user: {
            email: '',
            username: '',
            password: ''
         }
      });
   }

   render() {
      return (
         
         this.props.status === "loggedIn" ?
            null // redirect to user profile if already signed up
            :
            <div>
               <form className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6"
                     onSubmit={this.handleOnSubmit}>
                  <label htmlFor="email">Email</label>
                  <input name="email" 
                        type="email" 
                        value={this.state.user.email}
                        onChange={this.handleOnChange} 
                        placeholder="Enter your email"
                        className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" />
                  <br />
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
                        value="Signup"
                        className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" />
               </form>
            </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      status: state.login.status
   }
}

export default connect(mapStateToProps, { addUser, loginUser })(SignupForm);
