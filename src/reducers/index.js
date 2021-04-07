import { combineReducers } from 'redux';
import stocksReducer from './stocks';
// import usersReducer from './users';
import loginReducer from './login';

export default combineReducers({
   stocks: stocksReducer,
   // users: usersReducer,
   login: loginReducer
});
