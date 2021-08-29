import React from "react"
import './header.css'
import { Link } from 'react-router-dom';
// class Header extends React.Component {

//     render() {
//         return (
//             <div className="navBar">
//                 <div className="title">
//                     <h1>Moviero</h1>
//                 </div>
//                 <div className="end-title">
//                     <h1>Log In</h1>
//                 </div>

//             </div>
//         );
//     }

// }

const Header = ({ currentUser }) => {




    console.log(currentUser);



    return (
        <div className="navBar1">
            <div className="title">
                <Link to="/">  <h1>Moviero</h1> </Link>
            </div>
            <div className="end-title">
                <h1>{currentUser ? currentUser.userName : "Log In"}</h1>
            </div>

        </div>
    );
};




export default Header;