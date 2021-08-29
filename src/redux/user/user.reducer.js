import { UserActionTypes } from './user.types'
import { userLogout } from './user.utils'

const INITIAL_STATE = {
    loading: false,
    currentUser: null,
    error: ' ',
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.FETCH_CURRENT_USER:
            return {
                ...state,
                loading: !state.loading,
                error: '',
            };
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,

                currentUser: action.payload
            };
        case UserActionTypes.FETCH_USER_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case UserActionTypes.USER_LOGOUT:
            return {
                ...state,

                currentUser: userLogout(),

            }
        default:
            return state;
    }
};


export default userReducer;