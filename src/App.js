import "./App.css";
import Signup from "./pages/sign-up/signup";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Login from "./pages/login/login";
import LandingPage from "./pages/landingPage/landingPage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/Customer-Pages/homepage/homepage";
import SideNavBar from "./components/sideNavbar/sideNavbar";
import { connect } from "react-redux";
import store from "./redux/store";
import { logUser } from "./redux/user/user.action";
import { setCurrentRole, fetchUserRoles } from "./redux/userRole/userRole.action";
import Categories from "./pages/Customer-Pages/categoriesPage/categoriesPage";
import UserPasswordReset from "./pages/Customer-Pages/UserPasswordReset/UserPasswordReset";
import UserProfile from "./pages/Customer-Pages/user-profile/userProfile";
import AdminPage from "./pages/Admin-Pages/admin-home/adminHome";
import Cart from "./pages/Customer-Pages/cartPage/cartPage";
import MoviePage from "./pages/Customer-Pages/movieProductPage/movieProductPage";
import AdminMovieList from './pages/Admin-Pages/admin-movies/adminMovies'
import SearchResult from "./pages/Customer-Pages/SearchResultPage/searchResultPage"
import NewMovieUpload from "./pages/Admin-Pages/newMovie-Add/newMovie";
import MovieDetialEdit from "./pages/Admin-Pages/admin-movie-edit/adminMovieEdit"
import MovieDetailsEdit from "./pages/Admin-Pages/admin-movie-edit/adminMovieEdit";
import NewCategory from "./pages/Admin-Pages/admin-newCategory/adminNewCategoryAdd";
import PlayLists from "./pages/Customer-Pages/playList/playList";
class App extends React.Component {
  componentDidMount() {
    const { logUser } = this.props;

    logUser();

   
 //   setCurrentRole(currentUser.userRole)

  }

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    } else if (this.props.currentUser ) {
     
    
        return (
          <BrowserRouter>
            <Header currentUser={this.props.currentUser} currentRole={ this.props.currentRole}/>
            <SideNavBar />
            <Switch>
              <Route exact path="/"  render={() =>
                 this.props.currentRole == "ROLE_CUSTOMER" ? <HomePage /> : <Redirect to="/admin" />
                } />
              <Route exact path="/movies" component={Categories} />
              <Route exact path="/movie/:movieId" component={MoviePage} />
              <Route exact path="/user" component={UserProfile} />
              <Route exact path="/stream" component={PlayLists} />
            
            <Route exact path="/search/:title/:sortBy" component={SearchResult} />

              <Route exact path="/cart" component={Cart} />
                <Route exact path="/adminMovieList"  render={() =>
                 this.props.currentRole == "ROLE_ADMIN" ? <AdminMovieList /> : <Redirect to="/" />
                } />
               <Route exact path="/admin"  render={() =>
                   this.props.currentRole == "ROLE_ADMIN" ? <AdminPage /> : <Redirect to="/" />
                } />
              <Route exact path="/addMovie"
                render={() =>
                   this.props.currentRole == "ROLE_ADMIN" ? <NewMovieUpload /> : <Redirect to="/" />
                }
                
              />
                <Route exact path="/addCategory"
                render={() =>
                   this.props.currentRole == "ROLE_ADMIN" ? <NewCategory/> : <Redirect to="/" />
                }
                
                 />
               <Route exact path="/edit/:movieId"
                    component={MovieDetailsEdit}
        
                
                 />

              <Route
                exact
                path="/user/changePassword"
                component={UserPasswordReset}
              />
              <Route
                exact
                path="/signin"
                render={() =>
                  this.props.currentUser ? <Redirect to="/" /> : <Login />
                }
              />
            </Switch>
      
          </BrowserRouter>
        );
      
    } else {
      return (
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/homepage" /> : <Login />
              }
            />

            <Route exact path="/signup" component={Signup} />

            <Route path="/" component={LandingPage} />
          </Switch>
        </BrowserRouter>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    loading: state.user.loading,
    currentRole: state.userRole.currentRole,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUser: () => dispatch(logUser()),
    fetchUserRoles: () => dispatch(fetchUserRoles()),
    setCurrentRole: () => dispatch(setCurrentRole()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
