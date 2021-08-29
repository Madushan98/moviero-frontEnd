
import './App.css';
import Signup from './pages/sign-up/signup'
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Login from './pages/login/login'
import LandingPage from './pages/landingPage/landingPage'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import HomePage from './pages/Customer-Pages/homepage/homepage'
import SideNavBar from './components/sideNavbar/sideNavbar'
import { connect } from 'react-redux';
import store from './redux/store'
import { logUser } from './redux/user/user.action';
import Categories from './components/categories/categories';
import UserPasswordReset  from './pages/Customer-Pages/UserPasswordReset/UserPasswordReset';
import Category from './components/categories/category';
import UserProfile from './pages/Customer-Pages/user-profile/userProfile'
class App extends React.Component {





  componentDidMount() {
    const { logUser, currentUser } = this.props;

    logUser();
    console.log(currentUser);

  }



  render() {

   
    if (this.props.currentUser) {

 if (this.props.currentUser.userRole === 'Admin') {
       return (
        <BrowserRouter>
          <Header currentUser={this.props.currentUser} />
          <SideNavBar />
          <Switch>
            <Route exact path='/' component={HomePage} />
           
            <Route exact path='/user' component={UserProfile} />
            <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<Login />)} />
          </Switch>
        </BrowserRouter>
      );
 } else {
   
      return (
        <BrowserRouter>
          <Header currentUser={this.props.currentUser} />
          <SideNavBar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/categories' component={Categories} />
            <Route exact path='/user' component={UserProfile} />
             <Route exact path='/user/changePassword' component={UserPasswordReset} />
            <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<Login />)} />
          </Switch>
        </BrowserRouter>
      );
    }


    } else if (this.props.loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    else {

      return (

        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/homepage' />) : (<Login />)} />


            <Route exact path='/signup' component={Signup} />


            <Route path='/' component={LandingPage} />




          </Switch>

        </BrowserRouter>

      );
    }
  }


}


const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    loading: state.user.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logUser: () => dispatch(logUser())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
