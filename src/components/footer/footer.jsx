import React from 'react';
import './footer.css'



class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="footer-bar">
                    <p>About</p>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Careers</p>
                    <p>Help</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="footer-bar">
                    <p>©Moviero All rights reserved</p>

                </div>
            </div>
        );

    }
}

export default Footer;
