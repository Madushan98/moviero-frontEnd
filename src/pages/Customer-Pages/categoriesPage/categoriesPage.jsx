import React from "react";
import "./categoriesPage.scss";
import { withRouter } from "react-router";
import axios from "axios";
import MoviesList from "../../../components/movieList/moviesList"
import CategoryList from "../../../components/categoryList/categoryList"
class Categories extends React.Component {
  state = {
    Categories: [],
    selectedCategory: "all",
    url: "http://localhost:8000/movies",
    Movies: [],
    currentPage: 0,
     PageCount: 0,
  };

  getMovies(url) {

    console.log(url);

    this.setState({ loading: true });

    setTimeout(() => {
      axios
        .get(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.setState({
            Movies: res.data.content,
            PageCount: res.data.totalPages,
          });
          this.setState({ loading: false });
          console.log(this.state.currentPage);
        })
        .catch((err) => {
          console.error(err);
          this.setState({ loading: false });
        });
    }, 500);
  }



  componentDidMount() {
    setTimeout(
      () => {
        axios
          .get("categories", {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          })
          .then((res) => {
            this.setState({
              Categories: res.data,
            });

            console.log(this.state.Categories);
          })
          .catch((err) => {
            console.error(err);
          });
      },

      500
    );

     const url =
      "http://localhost:8000/movies/" + this.state.selectedCategory + "/?page=" +
      this.state.currentPage +
      "&limit=8";

    this.getMovies(url);
  }


   onCategoryChange = (category) => {
   

     this.setState({
       selectedCategory: category,
      currentPage : 0,
     });
     console.log(this.state.selectedCategory);
     
       const url =
      "http://localhost:8000/movies/" + category + "/?page=" +
      this.state.currentPage +
      "&limit=8";
    
       console.log(url);
    this.getMovies(url);

  }


 handlePageChange = (page) => {
    this.setState({ currentPage: page - 1 });
    const pageNumber = page - 1;
    
    const urll =
      "http://localhost:8000/movies/"+ this.state.selectedCategory + "?page=" + pageNumber + "&limit=8";

 
    
    this.getMovies(urll);
  };


  render() {
    const { match, history } = this.props;
   

 
    return (
        <section className="categories">

            <div className="category-movie-list">
                <MoviesList Movies={this.state.Movies}  currentPage={this.state.currentPage} handlePageChange={this.handlePageChange}  PageCount={this.state.PageCount}  />
            </div>
            <div className="category-list">
        
          <CategoryList  onChangeCategory={this.onCategoryChange} Categories={this.state.Categories} selectedCategory={this.state.selectedCategory} />
          </div>
        
      </section>
    );
  }
}

export default withRouter(Categories);
