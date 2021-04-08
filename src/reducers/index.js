import { combineReducers } from 'redux';
import stocksReducer from './stocks';
import loginReducer from './login';
import portfolioReducer from './portfolio';

export default combineReducers({
   stocks: stocksReducer,
   login: loginReducer,
   portfolio: portfolioReducer
});
