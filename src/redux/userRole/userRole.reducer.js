import { UserRoleActionTypes } from './userRole.types'


const INITIAL_STATE = {
    accounts: [],
    currentRole: "ROLE_CUSTOMER",
   
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserRoleActionTypes.FETCH_USER_ROLES:
            return {
                ...state,
               accounts: action.payload,
            };
        case UserRoleActionTypes.SET_CURRENT_ROLE:
            return {
                ...state,

                currentRole: action.payload,
            };
      
        default:
            return state;
    }
};


export default userReducer;