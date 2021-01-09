// base reducer obj represent all state of app
// combine all state together.
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

// Root reducer is an obj that has property of user that point to our user = userReducer which in INITIAL_STATE > IN user.reducer
export default combineReducers({
  user: userReducer,
});

// our full state in redux is just ONE BIG json object
// the key is represent the individual slices of state (user)
