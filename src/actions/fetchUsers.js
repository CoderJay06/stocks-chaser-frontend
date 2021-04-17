import {
   loginUser,
   logoutUser
} from './users';
import {
   addExistingPortfolio
} from './portfolio';

// fetch login
export function fetchLogin(user) {
   // handle login action
   return (dispatch) => {
      // login user on submit
      const loginUrl = "http://localhost:3000/sessions";
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
            console.log('user portfolio in fetch ', userData.portfolio)
            userData.error ?
               alert(userData.error)
               :
               dispatch(loginUser(userData))

               // Check if user has a portfolio, add to store if so
               const userHasPortfolio = userData.portfolio.id ? true : false;
               if (userHasPortfolio) dispatch(addExistingPortfolio(userData.portfolio));
         })
         .catch(loginError => {
            alert(loginError.message)
         });
   }
}

// fetch logout
export function fetchLogout(user) {
   return (dispatch) => {
      // handle logout action
      const url = "http://localhost:3000/sessions";
      const userConfigObj = {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify({username: user})
      }
      console.log('user config obj: ', userConfigObj);
      fetch(url, userConfigObj)
      dispatch(logoutUser(user))
   }
}

// fetch signup
export function fetchSignup(userState) {
   return (dispatch) => {
      // handle action for signing up user
      const usersUrl = "http://localhost:3000/api/v1/users";
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
