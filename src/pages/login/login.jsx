import React from "react";
import axios from "axios";
import "./login.scss";
import FormInput from "../../components/reusable-Components/sign-input/sign-input.component";
import { connect } from "react-redux";
import { logUser } from "./../../redux/user/user.action";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastMessage from "../../Toast/toastMessage";

class Login extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault();

    const { logUser } = this.props;

    const user = {
      email: this.email,
      password: this.password,
    };

    axios
      .post("users/login", user)
      .then((res) => {
        localStorage.setItem("token", res.headers.authorization);
        localStorage.setItem("userId", res.headers.userid);
        console.log(localStorage.getItem("token"));
        logUser();
      })
        .catch((err) => {
        toastMessage("Please Try Again");
        console.log(err);
      });
  };

  render() {
    return (
      <section className="sign-section">
        <div>
          <ToastContainer />
        </div>
        <div className="sign-in">
          <div className="sign-title">
            <h1> Welcome to Moviero </h1>{" "}
            <h3>
              {" "}
              Don't Have an account? <Link to="/signup"> Sign Up</Link>{" "}
            </h3>
          </div>
          <form className="signin-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={(event) => (this.email = event.target.value)}
              label="Email"
              required
            />
            <FormInput
              type="password"
              placeholder="password"
              name="password"
              onChange={(event) => (this.password = event.target.value)}
              label="Password"
              required
            />

            <button className="submit-button" type="submit">
              {" "}
              Login{" "}
            </button>
          </form>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logUser: () => dispatch(logUser()),
  };
};

export default connect(null, mapDispatchToProps)(Login);
