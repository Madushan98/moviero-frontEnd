import { UserRoleActionTypes } from './userRole.types';


export const fetchUserRoles = userRoles => {

    return {
        type: UserRoleActionTypes.FETCH_USER_ROLES,
        payload:userRoles

    }

};

export const setCurrentRole = Role => ({
    type: UserRoleActionTypes.SET_CURRENT_ROLE,
    payload: Role
});

