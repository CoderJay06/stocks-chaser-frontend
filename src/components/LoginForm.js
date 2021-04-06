import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/users';
import { Redirect } from 'react-router-dom'; 
import UserProfileContainer from '../containers/UserProfileContainer';

class LoginForm extends Component {
   state = {
      user: {
         username: '',
         password: ''
      }
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
         .then(userData => {
            userData.error ? 
               alert(userData.error) : this.props.loginUser(userData)
         })
         .catch(loginError => {
            alert(loginError.message)
         });
      
      // dispatch login with current state passed in
      // this.props.loginUser(this.state.user);

      // update state
      this.setState({
         user: {
            username: '',
            password: ''
         }
      });
   }

   render() {
      return (      
         this.props.status === "loggedIn" ?
            // redirect to user profile if already logged in
            <Redirect to="/profile">
               <UserProfileContainer />
            </Redirect>
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
      status: state.login.status,
      current: state.login.user
   }
}

export default connect(mapStateToProps, { loginUser })(LoginForm);