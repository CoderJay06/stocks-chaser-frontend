import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/users';
import { BrowserRouter as Router,
         Route,
         Redirect } from 'react-router-dom'; 

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
      // fetch session to login user
      const loginUrl = "http://localhost:3000/sessions";
      const userConfigObj = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify(this.state.user)
      }

      // login user on submit
      fetch(loginUrl, userConfigObj)
         .then(response => response.json())
         .catch(loginError => {
            alert(loginError.message)
         });
      
      // dispatch login with current state passed in
      this.props.loginUser(this.state.user);

      // update state
      this.setState({
         user: {
            username: '',
            password: ''
         },
         isLoggedIn: true
      });
   }

   render() {
      return (
         this.state.isLoggedIn ?
            <h1>Logged in as, {this.props.user.username}</h1>
             // redirect to user profile if logged in
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

const mapStateToProps = state => {
   // debugger
   return {
      loginStatus: "loggedIn",
      user: state.login.user
   }
}

export default connect(mapStateToProps, { loginUser })(LoginForm);