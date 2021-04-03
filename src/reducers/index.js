import { combineReducers } from 'redux';
import stocksReducer from './stocks';

export default combineReducers({
   stocks: stocksReducer
});
