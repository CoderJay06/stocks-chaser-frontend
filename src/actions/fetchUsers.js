import { loginUser, logoutUser, loginError } from './users';
import { addExistingPortfolio } from './portfolio';
import { START_LOADING_USER } from '../actions/users'; 

export function fetchLogin(user) {
   // handle login action
   return (dispatch) => {
      // login user on submit
      dispatch({type: START_LOADING_USER})
      const loginUrl = "https://stocks-chaser.herokuapp.com/sessions";
      const userConfigObj = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify(user)
      }

      fetch(loginUrl, userConfigObj)
         .then(response => response.json())
         .then(userData => {
            userData.error ?
               dispatch(loginError(userData.error))
               :
               dispatch(loginUser(userData))
               
               const userHasPortfolio = userData.portfolio && userData.portfolio.id
               if (userHasPortfolio) dispatch(addExistingPortfolio(userData.portfolio));
         })
         .catch(error => alert(error.message));
   }
}

export function fetchLogout(user) {
   return (dispatch) => {
      // handle logout action
      const url = "https://stocks-chaser.herokuapp.com/sessions";
      const userConfigObj = {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify({username: user})
      }
      fetch(url, userConfigObj)
      dispatch(logoutUser(user))
   }
}

export function fetchSignup(userState) {
   return (dispatch) => {
      // handle action for signing up user
      const usersUrl = "https://stocks-chaser.herokuapp.com/api/v1/users";
      const configUsersObj = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify({user: userState})
      };

      // signup user, add them to users db
      fetch(usersUrl, configUsersObj)
         .then(response => response.json())
         .then(userData => {
            dispatch(loginUser(userData))
         })
         .catch(signupError => {
            alert(signupError.message)
         });
   }
}
