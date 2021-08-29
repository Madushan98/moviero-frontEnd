import { UserActionTypes } from './user.types';
import axios from 'axios';

export const fetchCurrentUser = () => {

    return {
        type: UserActionTypes.FETCH_CURRENT_USER

    }

};

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});


export const fetchErrorMessage = error => ({
    type: UserActionTypes.FETCH_USER_FAILURE,
    payload: error
})

export const logOutUser = () => ({
    type: UserActionTypes.USER_LOGOUT

})






export const logUser = () => {

    return (dispatch) => {
        dispatch(fetchCurrentUser());
        setTimeout(() => {



            const userId = localStorage.getItem('userId')

            const userUrl = 'users/' + userId;

            axios.get(userUrl, {
                headers: {
                    Authorization: localStorage.getItem('token'), //here remove + in template litereal
                },
            }).then(res => {


                const user = res.data;
                dispatch(setCurrentUser(user));
                dispatch(fetchCurrentUser());


            }).catch(
                err => {
                    console.log(err);
                    dispatch(fetchErrorMessage(err.message));
                    dispatch(fetchCurrentUser());
                })

        }
            , 100)




    }


}




export const updateUser = (user) => {

    return (dispatch) => {
        dispatch(fetchCurrentUser());
        setTimeout(() => {

            console.log(user);

            const userId = localStorage.getItem('userId')

            const userUrl = 'users/' + userId;

 axios.put(userUrl, user,{
                headers: {
                    Authorization: localStorage.getItem('token'), //here remove + in template litereal
                },
            })
     .then(response => {
          const updatedUser = response.data;
                dispatch(setCurrentUser(updatedUser));
                dispatch(fetchCurrentUser());
         
         
       
     })
        .catch(error => {
         
                    dispatch(fetchErrorMessage(error.message));
                    dispatch(fetchCurrentUser());
            console.error('There was an error!', error);
        });  

        }
            , 100)




    }


}
