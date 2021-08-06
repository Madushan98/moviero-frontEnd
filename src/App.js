
import './App.css';
import Signup from './pages/sign-up/signup'
import React from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Login from './pages/login/login'
import LandingPage from './pages/landingPage/landingPage'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import HomePage from './pages/homepage/homepage'
import axios from 'axios';

class App extends React.Component {


  constructor() {
    super();
    this.state = {
      user: null
    };
  }



  componentDidMount() {

    const userId = localStorage.getItem('userId')

    const userUrl = 'users/' + userId;






    axios.get(userUrl, {
      headers: {
        Authorization: localStorage.getItem('token'), //here remove + in template litereal
      },
    }).then(res => {
      console.log(res);

      this.setState({ user: res.data });
      console.log(this.state.user)
    },
      err => {
        console.log(err);
      }

    )


  }


  render() {
    return (


      <BrowserRouter>
        <Header />
        <Switch>

          <Route exact path='/' component={LandingPage} />

          <Route exact path='/' render={() => this.state.user ? (<Redirect to='/homepage' />) : (<HomePage />)} />


          <Route exact path='/signup' component={Signup} />
          <Route exact path='/signin' component={Login} />

        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }

}

export default App;
