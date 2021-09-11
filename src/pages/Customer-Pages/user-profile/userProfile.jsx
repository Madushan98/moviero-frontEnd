import React from "react";

import "./userProfile.scss";
import FormInput from "../../../components/reusable-Components/sign-input/sign-input.component";
import { connect } from "react-redux";
import { updateUser } from "../../../redux/user/user.action";
import { Link } from "react-router-dom";
import store from "../../../redux/store";
class UserProfile extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault();

    const { updateUser } = this.props;

    const user = {
      userName:
        this.userName == undefined
          ? this.props.currentUser.userName
          : this.userName,
      email:
        this.email === undefined ? this.props.currentUser.email : this.email,
      firstName:
        this.firstName === undefined
          ? this.props.currentUser.firstName
          : this.firstName,
      lastName:
        this.lastName === undefined
          ? this.props.currentUser.lastName
          : this.lastName,
    };

    updateUser(user);
  };

  render() {
    if (this.props.loading) {
      return <div className="user-profile">Loading</div>;
    } else {
      return (
        <div className="user-profile">
          <div>
            <h2>Hello Madushan!</h2>
          </div>

          <FormInput
            type="text"
            name="User Name"
            placeholder={this.props.currentUser.userName}
            onChange={(event) => (this.userName = event.target.value)}
            label="User Name"
            required
          />

          <FormInput
            type="text"
            name="First Name"
            placeholder={this.props.currentUser.firstName === null ? "Enter Your First Name" : this.props.currentUser.firstName }
            onChange={(event) => (this.firstName = event.target.value)}
            label="First Name"
            required
          />

          <FormInput
            type="text"
            name="Last Name"
            placeholder={this.props.currentUser.lastName === null ? "Enter Your Last Name" : this.props.currentUser.lastName }
            onChange={(event) => (this.lastName = event.target.value)}
            label="Last Name"
            required
          />

          <FormInput
            type="text"
            name="email"
            placeholder={this.props.currentUser.email}
            onChange={(event) => (this.email = event.target.value)}
            label="Email"
            required
          />

          <button
            className="submit-button"
            type="submit"
            onClick={this.handleSubmit}
          >
            Change Details
          </button>

          <div className="change-password">
            
            To change your password
            <Link to="/user/changePassword">Click Here!</Link>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    loading: state.user.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
