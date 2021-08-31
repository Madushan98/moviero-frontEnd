import React from "react"
import Carousel from 'react-elastic-carousel'
import './latest-movies.scss'
import axios from "axios";
import MovieCard from '../../components/reusable-Components/movie-card/movie-card'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 6 }
];


class LatestMovies extends React.Component {

    state = {
        Movies: []
    };


    componentDidMount() {
          setTimeout(() => {
    
            axios.get('movies', {
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            }).then(res => {
                this.setState({

                    Movies: res.data,
                })
     
                console.log(this.state.Movies)

            }).catch(
                err => {
                    console.error(err);
                })
        }, 500)

    }


    render() {

        return (
            <section>
               
      

      <div className="latestMovie-carousel">
        <Carousel breakPoints={breakPoints} showArrows={false}>
         { this.state.Movies.map((item,index) => (
             <div key={index}>
                 
            <MovieCard/>

            </div>
          ))}
        </Carousel>
      </div>
    
            </section>
        )

    }
}



export default LatestMovies;