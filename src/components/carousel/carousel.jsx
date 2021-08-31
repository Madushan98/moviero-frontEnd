import React from "react";

import axios from "axios";

import CarouselContainer from "./carouselContainer";

import './carousel.scss'
class Carousel extends React.Component {

    state = {
        previewMovies : [],
    }


    componentDidMount() {
        setTimeout(() => {
    
            axios.get('movies', {
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            }).then(res => {
                this.setState({

                    previewMovies: res.data,
                })
     
                console.log(this.state.previewMovies)

            }).catch(
                err => {
                    console.error(err);
                })
        }, 500)
    }

    render() {
        return (
            <div className="my__carousel_main">
                <CarouselContainer previewMovies={this.state.previewMovies} />
            </div>
        )
    }
}
 
 
 
export default Carousel;