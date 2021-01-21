import CounterReducer from './counter.js';
import LoggedReducer from './loggedin';
import { combineReducers } from 'redux';
const AllReducer = combineReducers({
  counter: CounterReducer,
  isLogged: LoggedReducer,
});
export default AllReducer;
