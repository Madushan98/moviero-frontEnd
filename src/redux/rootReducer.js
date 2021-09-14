import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import userRoleReducer from './userRole/userRole.reducer';

export default combineReducers({
    user: userReducer,
    userRole: userRoleReducer,
});
