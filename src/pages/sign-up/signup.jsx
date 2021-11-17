import React from "react";
import axios from "axios";
import "./signUp.scss";
import FormInput from "../../components/reusable-Components/sign-input/sign-input.component";
import { withRouter, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastMessage from "../../Toast/toastMessage";

class Signup extends React.Component {






  handleSubmit = async (e) => {
    e.preventDefault();


   

    const user = {
      userName: this.userName,
      email: this.email,
      password: this.password,
    };

    if (this.password === this.confirmPassword) {
      axios
        .post("users", user)
        .then((res) => {
          console.log(res);

          this.props.history.push("/signin");
        })
        .catch((err) => {
          console.log(err);
           toastMessage("E-mail is Already Taken");
        });
    } else {
      toastMessage("Password Doesn't Match");
        
    }
  };



  render() {
    return (
      <section className="sign-section">
          <div>
            <ToastContainer />
          </div>
       
        <div className="sign-up">
          {" "}
          <div className="sign-title">
            {" "}
            <h1>Welcome to Moviero</h1>{" "}
            <h3>
              Have an account? 
             
                <Link to="/signin"> Sign in</Link>
             
            </h3>{" "}
          </div>{" "}
          <form className="signup-form" onSubmit={this.handleSubmit}>
            {" "}
            <FormInput
              type="text"
              id="username"
              name="userName"
              placeholder=" user name"
              onChange={(event) => (this.userName = event.target.value)}
              label="User name"
              required
            />{" "}
            <FormInput
              type="text"
              id="email"
              name="email"
              placeholder=" Email"
              onChange={(event) => (this.email = event.target.value)}
              label="Email"
              required
            />{" "}
            <FormInput
              type="password"
                id="password"
              name="password"
              placeholder=" password"
              onChange={(event) => (this.password = event.target.value)}
              label="Password"
              required
            />{" "}
            <FormInput
              type="password"
                  id="confirm-password"
              name="confirm-password"
              placeholder=" confirm-password"
              onChange={(event) => (this.confirmPassword = event.target.value)}
              label="Confirm Password"
              required
            />{" "}
            <button className="submit-button" type="submit">
              Sign Up
            </button>
          </form>{" "}
        </div>{" "}
      </section>
    );
  }
}

export default withRouter(Signup);
