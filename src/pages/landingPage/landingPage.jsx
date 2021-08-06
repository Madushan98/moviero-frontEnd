import React from 'react';

import './landingPage.css'

import { Link } from "react-router-dom";

class LandingPage extends React.Component {


    render() {
        return (
            <section>

                <div className="landing">
                    <div className="top-title">
                        <h1>Unlimited movies, Tv Shows  <br />  And More.</h1>
                        <h3>Watch anywhere. Cancel anytime.</h3>
                        <Link to='/signin'><button>Let's Go</button></Link>
                    </div>
                    <div className="top-image">

                    </div>

                </div>


                <div className="second-land">
                    <div className="description">
                        <div className="title">
                            <h1>Thousands of titles</h1>
                        </div>

                        <div className="pharagraph">
                            <p>Watch amazing movies and TV shows for free. No subscription fees,<br /> and no credit cards. Just thousands
                                of
                                hours of
                                streaming video content from studios like Paramount, Lionsgate, MGM and more.</p>
                        </div>

                    </div>


                    <div className="devices">
                    </div>

                </div>




            </section>



        );
    }
}


export default LandingPage;