
import React from "react";
import axios from "axios";
import MoviesList from "../../../components/reusable-Components/movieList/moviesList"
import TitleBar  from "../../../components/reusable-Components/titleBar/titleBar"
import './searchResultPage.scss'

class SearchResult extends React.Component {

    state = {
        Movies: [],
         currentPage: 0,
        PageCount: 0,
       
    }


  componentDidMount() {
      
    const sortBy = this.props.match.params.sortBy;
    const title = this.props.match.params.title;

    

     const url =
      "/movies/search?title=" + title + "&sortBy=" + sortBy + "&page=" + this.state.currentPage +"&limit=8";

    this.getMovies(url);
}

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



    

  handlePageChange = (page) => {
   
      const sortBy = this.props.match.params.sortBy;
    const title = this.props.match.params.title;

    this.setState({ currentPage: page - 1 });
    const pageNumber = page - 1;
    
   const url =
      "movies/search?title=" + title + "&sortBy=" + sortBy + "&page=" + pageNumber +"&limit=8";

 
    
    this.getMovies(url);
  };


  render() {
       const sortBy = this.props.match.params.sortBy;
    const title = this.props.match.params.title;
    const heading = "Search result For " + title
        return (
          <section className="search-result">
            <TitleBar title={heading}/>
          
                  <MoviesList Movies={this.state.Movies}  currentPage={this.state.currentPage} handlePageChange={this.handlePageChange}  PageCount={this.state.PageCount}  />

            </section>

        )
    }
}


export default SearchResult;