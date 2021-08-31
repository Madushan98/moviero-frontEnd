import React from "react"
import './header.scss'
import { Link } from 'react-router-dom';


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

            <div className="end-title">
                <h1>{currentUser ? currentUser.userName : "Log In"}</h1>
            </div>


            

        </div>
    );
};




export default Header;