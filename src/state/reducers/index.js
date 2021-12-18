import { combineReducers } from 'redux';
import accountReducer from './accountReducer';


//combineReducers is a function that takes in an object
//of all the reducers that we want to combine
const reducers = combineReducers({
    account: accountReducer //setting up the account
    //portion of our store to be equal to the returns
    //of accountReducer
})

export default reducers