import React from 'react'
import { connect } from 'react-redux';
import './sideNavbar.css'
import 'boxicons'
import { ReactComponent as ReactLogo } from '../../assets/svg/log-out.svg';
import { logOutUser } from '../../redux/user/user.action'
import { Link } from 'react-router-dom';



class SideNavBar extends React.Component {



    render() {
        return (
            <div className="side_navbar">
                <div className="logo_content">



                    <box-icon name='cube-alt' color='#ffffff' ></box-icon>



                </div>

                <ul className='nav_list'>
                    <li>
                        <Link to="/">
                            <box-icon name='home' color='#ffffff' ></box-icon>

                        </Link>


                        <span className='tool-tip'>Home</span>
                    </li>
                    <li>

                        <Link to="/categories">
                            <box-icon name='category' color='#ffffff' ></box-icon>
                        </Link>


                        <span className='tool-tip'>Categories</span>
                    </li>
                    <li>
                        <Link to="/favorites">
                            <box-icon name='heart-circle' type='solid' color='#ffffff' ></box-icon>
                        </Link>


                        <span className='tool-tip'>Favorites</span>
                    </li>
                    <li>
                        <Link to="/cart">
                            <box-icon name='cart' type='solid' color='#ffffff' ></box-icon>


                        </Link>
                        <span className='tool-tip'>Cart</span>
                    </li>
                    <li>
                        <Link to="/user">
                            <box-icon name='user' color='#ffffff' ></box-icon>

                        </Link>
                        <span className='tool-tip'>User</span>
                    </li>
                </ul>
                <div className="profile_box">

                    <box-icon name='log-out' color='#ffffff' onClick={() => this.props.userLogout()} ></box-icon>
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

export default connect(null, mapDispatchToProps)(SideNavBar);