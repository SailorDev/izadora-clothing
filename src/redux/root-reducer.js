// base reducer obj represent all state of app
// combine all state together.
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer,
});

// our full state in redux is just ONE BIG json object
// the key is represent the individual slices of state (user)
