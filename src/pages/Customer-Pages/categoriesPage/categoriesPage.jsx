import React from "react";
import "./categoriesPage.scss";
import { withRouter } from "react-router";
import axios from "axios";
import MoviesList from "../../../components/reusable-Components/movieList/moviesList";
import CategoryList from "../../../components/categoryList/categoryList";
import SearchBar from "../../../components/reusable-Components/searchBar/searchBar";
import { connect } from "react-redux";
import { ToastContainer } from 'react-toastify';

class Categories extends React.Component {
  state = {
    selectedCategory: "all",
    url: "movies",
    Movies: [],
    currentPage: 0,
    PageCount: 0,
  };

  getMovies(url) {
    console.log(url);

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
   
    

    const url =
      "/movies/" +
      this.state.selectedCategory +
      "/?page=" +
      this.state.currentPage +
      "&limit=8";

    this.getMovies(url);
  }

  onCategoryChange = (category) => {
    this.setState({
      selectedCategory: category,
      currentPage: 0,
    });
    console.log(this.state.selectedCategory);

    const url =
      "/movies/" +
      category +
      "/?page=" +
      this.state.currentPage +
      "&limit=8";

    console.log(url);
    this.getMovies(url);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page - 1 });
    const pageNumber = page - 1;

    const urll =
      "/movies/" +
      this.state.selectedCategory +
      "?page=" +
      pageNumber +
      "&limit=8";

    this.getMovies(urll);
  };

  render() {
  

    return (
      <section className="category-page" >
        <div>
  <ToastContainer/>
        </div>
      
            <SearchBar />
        <div className="categories">


      
    
        <div className="category-movie-list">
          <MoviesList
            Movies={this.state.Movies}
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
            PageCount={this.state.PageCount}
          />
        </div>
        <div className="category-list">
          <CategoryList
            onChangeCategory={this.onCategoryChange}
            Categories={this.props.categories}
            selectedCategory={this.state.selectedCategory}
          />
        </div>
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


export default withRouter(connect(mapStateToProps,null)(Categories));
