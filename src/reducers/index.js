import { combineReducers } from 'redux';
import stocksReducer from './stocks';
import loginReducer from './login';

export default combineReducers({
   stocks: stocksReducer,
   login: loginReducer
});
