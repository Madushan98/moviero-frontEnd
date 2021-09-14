import React from "react";

import "./homepage.scss";
import SideNavBar from "../../../components/sideNavbar/sideNavbar";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Footer from "../../../components/footer/footer";
import { connect } from "react-redux";
import store from "../../../redux/store";


import Carousel  from '../../../components/carousel/carousel';
import SearchBar from "../../../components/reusable-Components/searchBar/searchBar";
import LatestMovies from '../../../components/latest-movies/lateset-movies'
// Import Swiper styles





class HomePage extends React.Component {
  render() {
    const imageUrl = "https://i.ibb.co/SwrbMP3/s-2.jpg";
    return (
      <section id="home-page">
      <SearchBar />
      <Carousel/>

       
        
        <div className="browser-features">
          <div className="feature-title">Latest Movies</div>
                <LatestMovies />
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
