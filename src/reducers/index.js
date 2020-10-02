import { combineReducers } from 'redux'
import Counter from './counterReducer'
import LoggedIn from './isLoggedInReducer'

const JoinedReducers = combineReducers({
    count: Counter,
    loggedIn : LoggedIn

});

export default JoinedReducers;