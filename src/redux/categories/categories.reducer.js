import {CategoriesActionTypes} from './categories.types'


const INITIAL_STATE = {
    Categories: [],
   
}

const CategoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case CategoriesActionTypes.FETCH_CATEGORIES:
            return {
                ...state,
               Categories: action.payload,
            };
          case CategoriesActionTypes.GET_CATEGORIES:
            return {
                ...state,
            };
        default:
            return state;
    }
};





export default CategoriesReducer;