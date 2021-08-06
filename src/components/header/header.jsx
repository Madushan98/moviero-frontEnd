import React from "react"

import './header.css'
class Header extends React.Component {

    render() {
        return (
            <div className="navBar">
                <div className="title">
                    <h1>Moviero</h1>
                </div>
                <div className="end-tile">
                    <h1>Sign Up</h1>
                </div>

            </div>
        );
    }

}

export default Header;