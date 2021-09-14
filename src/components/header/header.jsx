import React from "react"
import './header.scss'
import { Link } from 'react-router-dom';
import SwitchDropDown from "../reusable-Components/switch/switch";


const Header = ({ currentUser }) => {

    


    console.log(currentUser);




    return (
        <div className="navBar-top">
            <div className="title">
                <Link to="/">
                    <h1>Moviero</h1>
                
                </Link>
            </div>

            <div>
                
            </div>
            {currentUser? (
        <div className="end-title" >
                <h1>{ currentUser.userName }</h1>

                <SwitchDropDown />
            </div>

            ) : (
                    
                    <div className="end-title" >
                         <Link to="/signin">
                <h1>Log In</h1>
  </Link>
             
            </div>
            )}
            

            {/* <div className="end-title" >
                <h1>{currentUser ? currentUser.userName : "Log In"}</h1>

                <SwitchDropDown />
            </div> */}


            

        </div>
    );
};






export default Header;