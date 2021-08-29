import React from "react";

import axios from "axios";

import CarouselContainer from "./carouselContainer";


class Carousel extends React.Component {

    state = {
        previewMovies : [],
    }


    componentDidMount() {
        
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
  
    }

    render() {
        return (
            <div>
                <CarouselContainer previewMovies={this.state.previewMovies} />
            </div>
        )
    }
}
 
 
 
export default Carousel;