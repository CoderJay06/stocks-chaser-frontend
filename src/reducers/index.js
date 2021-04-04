import { combineReducers } from 'redux';
import stocksReducer from './stocks';
import usersReducer from './users';

export default combineReducers({
   stocks: stocksReducer,
   users: usersReducer
});
