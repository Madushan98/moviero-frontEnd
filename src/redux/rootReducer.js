import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import userRoleReducer from './userRole/userRole.reducer';
import CategoriesReducer from './categories/categories.reducer';

export default combineReducers({
    user: userReducer,
    userRole: userRoleReducer,
    categories: CategoriesReducer,
});
