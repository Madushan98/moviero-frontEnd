import React from "react";
import { connect } from "react-redux";
import {
  setCurrentRole,
  fetchUserRoles,
} from "../../redux/userRole/userRole.action";
import "./sideNavbar.scss";
// import "boxicons";
import { ReactComponent as ReactLogo } from "../../assets/svg/log-out.svg";
import { logOutUser } from "../../redux/user/user.action";
import { Link } from "react-router-dom";

class SideNavBar extends React.Component {
  componentDidMount() {
    const { fetchUserRoles, setCurrentRole } = this.props;

    fetchUserRoles(this.props.currentUser.userRole);
  }
  render() {
    if (this.props.currentRole == "ROLE_CUSTOMER") {
      return (
        <div className="side_navbar">
          <div className="logo">
            <i className="bx bxs-cube-alt"></i>
          </div>

          <ul className="nav_list">
            <li>
              <Link to="/">
                <i className="bx bxs-home"></i>
              </Link>

              <span className="tip">Home</span>
            </li>
            <li>
              <Link to="/movies">
                <i className="bx bxs-category"></i>
              </Link>
               <span className="tip">Movie List</span>
            </li>
            <li>
              <Link to="/cart">
                <i className="bx bxs-cart"></i>
              </Link>

              <span className="tip">Cart</span>
            </li>
            <li>
              <Link to="/stream">
                <i className="bx bx-play-circle"></i>
              </Link>
              <span className="tip">Stream List</span>
            </li>
            <li>
              <Link to="/user">
                <i className="bx bxs-user-circle"></i>
              </Link>
              <span className="tip">User</span>
            </li>

          </ul>
          <div className="logOut">
            <i
              className="bx bx-log-out-circle"
              onClick={() => this.props.userLogout()}
            ></i>
          </div>
        </div>
      );
    } else {
      return (
        <div className="side_navbar">
          <div className="logo">
            <i className="bx bxs-cube-alt"></i>
          </div>

          <ul className="nav_list">
             <li>
                  <Link to="/admin">
                   <i class='bx bxs-analyse'></i>
                  </Link>
                  <span className="tip">Analitics</span>
                </li>
        
           <li>
                  <Link to="adminMovieList">
                    <i className="bx bx-list-check"></i>
                  </Link>
                  <span className="tip">Movie List</span>
                </li>
          <li>
            <Link to="addMovie">
              <i className="bx bxs-image-add"></i>
            </Link>

            <span className="tip">Add Movie</span>
          </li>
  </ul>
          <div className="logOut">
            <i
              className="bx bx-log-out-circle"
              onClick={() => this.props.userLogout()}
            ></i>
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
    currentRole: state.userRole.currentRole,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => dispatch(logOutUser()),
    fetchUserRoles: (userRoles) => dispatch(fetchUserRoles(userRoles)),
    setCurrentRole: (Role) => dispatch(setCurrentRole(Role)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNavBar);
