import React from "react";
import "./homepage.scss";
import { connect } from "react-redux";
import Carousel from "../../../components/carousel/carousel";
import SearchBar from "../../../components/reusable-Components/searchBar/searchBar";
import TitleBar from "../../../components/reusable-Components/titleBar/titleBar";
import { ToastContainer } from "react-toastify";
import HomepageMovies from "../../../components/homepage-movies/homepage-movies";

class HomePage extends React.Component {
  render() {
    const url = {
      latestMoviesUrl: "movies/latest",
      popularMoviesUrl: "movies/popular",
      newlyAddedMoviesUrl: "movies/new",
    };

    return (
      <section id="home-page">
        <div>
          <ToastContainer />
        </div>
        <SearchBar />
     <Carousel />
        <div className="browser-features">
          <TitleBar title="Latest Movies" />
          <HomepageMovies url={url.latestMoviesUrl} />
        </div>

   
        <div className="browser-features">
          <TitleBar title="New Movies" />
          <HomepageMovies url={url.newlyAddedMoviesUrl} />
        </div>
        <div className="browser-features">
          <TitleBar title="Most Popular Movies" />
          <HomepageMovies url={url.popularMoviesUrl} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    loading: state.user.loading,
  };
};

export default connect(mapStateToProps)(HomePage);
