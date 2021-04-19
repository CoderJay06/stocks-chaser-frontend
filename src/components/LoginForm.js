import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLogin } from '../actions/fetchUsers';
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

      // authenticate/login user and reset state
      this.props.fetchLogin(this.state.user)
      this.setState({
         user: {
            username: '',
            password: ''
         }
      });
   }

   render() {
      return (    
         // when logged in redirect to user profile, otherwise render form  
         this.props.status === "loggedIn" ?
            <Redirect to="/profile">
               <UserProfileContainer />
            </Redirect>
            :
            <div style={{
               backgroundImage: "url(/images/logo.jpeg)", 
               width: "1300px", 
               height: "1300px"
            }}>
               <form className="max-w-6xl w-2/4 mx-auto mt-16 shadow-lg 
                  hover:bg-green-400 hover:bg-opacity-25 px-4 py-6"
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
            </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      status: state.login.status,
      current: state.login.user
   }
}

export default connect(mapStateToProps, { fetchLogin })(LoginForm);