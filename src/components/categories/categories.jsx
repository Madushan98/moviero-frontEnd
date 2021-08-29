import React from 'react';

import './categories.css'


class Categories extends React.Component {


    render() {


        return (


            <section >
                <div className="categories">
                    <div className="box box-Romance ">
                        <div className="box-title">
                            Romance
                        </div>

                    </div>
                    <div className="box box-Action">
                        <div className="box-title">
                            Action
                        </div>

                    </div>
                    <div className="box box-Animation">
                        <div className="box-title">
                            Animation
                        </div>

                    </div>
                    <div className="box box-Fantasy">
                        <div className="box-title">
                            Fantasy
                        </div>


                    </div>
                    <div className="box box-Horror">
                        <div className="box-title">
                            Horror
                        </div>

                    </div>
                    <div className="box box-Sci-Fi">
                        <div className="box-title">
                            Sci-Fi
                        </div>

                    </div>
                </div>



            </section>
        );
    }



}



export default Categories;