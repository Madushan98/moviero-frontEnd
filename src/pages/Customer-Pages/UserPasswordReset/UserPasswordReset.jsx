import React from "react";
import FormInput from "../../../components/reusable-Components/sign-input/sign-input.component";
import './UserPasswordReset.scss';
class UserPasswordReset extends React.Component {
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
    return (
      <div className="user-password-reset">
        <div className="password-reset-container">

        <div>
            <h3>Enter Your new Password</h3>
            <hr></hr>
        </div>
        <FormInput
          type="password"
          name="password"
          placeholder=" password"
          onChange={(event) => (this.password = event.target.value)}
          label="Password"
          required
        />{" "}
        <FormInput
          type="password"
          name="confirm-password"
          placeholder=" confirm-password"
          onChange={(event) => (this.confirmPassword = event.target.value)}
          label="Confirm Password"
          required
        />
        <button
          className="submit-button"
          type="submit"
          onClick={this.handleSubmit}
          >Change Password</button>
          
        </div>

        </div>
        
            
    );
  }
}

export default UserPasswordReset;
