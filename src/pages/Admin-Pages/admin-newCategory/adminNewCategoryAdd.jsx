import axios from "axios";
import React from "react";
import FormInput from "../../../components/reusable-Components/sign-input/sign-input.component";
import TitleBar  from "../../../components/reusable-Components/titleBar/titleBar"
import "./adminNewCategoryAdd.scss"
import CategoryList from "../../../components/admin-categoryList/adminCategoryList"
import { ToastContainer, toast } from 'react-toastify';
import { connect } from "react-redux";
import { fetchAllCategories } from "../../../redux/categories/categories.action";

class NewCategory extends React.Component {


    createNewCategory(category) {
        const url = "categories"
 const message = (errorMessage) => toast(errorMessage,
    {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
})
      
       axios.post(url, category, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
      
        this.props.fetchAllCategories();
message("Category Created");
      
      }).catch((err) => {
        console.log(err);
        message("Please Try Again");
        });

    }


    handleCreateCategory =async(e) => {
        e.preventDefault();
        
 const category = {
     categoryName : this.categoryName
        };
        
        if (category != null) {
            this.createNewCategory(category);
        }
   
    }





  render() {
    return (
        <section className="new-category">
           <div>
            <ToastContainer />
          </div >
       
            {/* <div className="category-container">
               <CategoryList/>

            </div> */}
            <div className="new-category-container">
                  <TitleBar title="Manage Category" />
          <FormInput
            type="text"
            name="categoryName"
            placeholder="category"
            onChange={(event) => (this.categoryName = event.target.value)}
            label="Category Name"
            required
          />
          <button
            className="submit-button"
            type="submit"
            onClick={this.handleCreateCategory}
          >Add New Category</button>
        </div>

        <div  className="category-List">
           <CategoryList />
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.categories.Categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCategories: () => dispatch(fetchAllCategories()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCategory);
