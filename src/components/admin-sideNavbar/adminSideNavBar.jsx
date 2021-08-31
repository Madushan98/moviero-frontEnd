import React from 'react'
import { connect } from 'react-redux';
import './adminSideNavbar.scss'
import 'boxicons'
import { ReactComponent as ReactLogo } from '../../assets/svg/log-out.svg';
import { logOutUser } from '../../redux/user/user.action'
import { Link } from 'react-router-dom';



class AdminSideNavBar extends React.Component {



    render() {
        return (
            <div className="side_navbar">
                <div className="logo">



                  <i class='bx bxs-cube-alt' ></i>



                </div>

                <ul className='nav_list'>
                    <li>
                        <Link to="/">
                          <i class='bx bxs-home' ></i>

                        </Link>


                        <span className='tip'>Home</span>
                    </li>
                    <li>

                        <Link to="analysis">
                            <i class='bx bxs-analyse'></i>
                        </Link>


                        <span className='tip'>Analysis</span>
                    </li>
                    <li>
                      <Link to="/newMovie">
                          <i class='bx bxs-image-add' ></i>
                        </Link>


                        <span className='tip'></span>
                    </li>
                    <li>
                        <Link to="/newMovie">
                           <i class='bx bx-user-minus' ></i>


                        </Link >
                        <span className='tip'>Add Movie</span>
                    </li>
                    <li>
                        <Link to="/user">
                              <i class='bx bxs-user-circle' ></i>

                        </Link>
                        <span className='tip'>User</span>
                    </li>
                </ul>
                <div className="logOut">
                                <i class='bx bx-log-out-circle' onClick={() => this.props.userLogout()}></i>   
                
                </div>
            </div>
        );
    }

}


const mapDispatchToProps = dispatch => {
    return {
        userLogout: () => dispatch((logOutUser()))
    }
}

export default connect(null, mapDispatchToProps)(AdminSideNavBar);