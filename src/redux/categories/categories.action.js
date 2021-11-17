import {CategoriesActionTypes} from './categories.types'
import axios from "axios"

export const fetchCategories = categories => {

    return {
        type: CategoriesActionTypes.FETCH_CATEGORIES,
        payload:categories

    }

};
export const getCategories = () => {

    return {
        type: CategoriesActionTypes.GET_CATEGORIES,
      

    }

};






export const fetchAllCategories = () => {

    return (dispatch) => {
        
      setTimeout(
      () => {
        axios
          .get("categories", {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          })
            .then((res) => {
               const categories = res.data;
         dispatch(fetchCategories(categories))
          })
          .catch((err) => {
            console.error(err);
          });
      },

      100
    );




    }


}



