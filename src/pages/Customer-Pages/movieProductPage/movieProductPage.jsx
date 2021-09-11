import React from "react";

import axios from "axios";
import "./movieProductPage.scss";
import './movies.css'

class MoviePage extends React.Component {
  state = {
    Movie: null,
  };

  getMovieDetails(movieId) {
    const url = "http://localhost:8000/movies/mov/" + movieId;

    setTimeout(() => {
      axios
        .get(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.setState({
            Movie: res.data,
          });

          console.log(this.state.Movie);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 500);
  }

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    console.log(movieId);
    this.getMovieDetails(movieId);
  }

  render() {
    if (this.state.Movie === null) {
      return (
        <section className="movie-page">
          <div className="movie-container">Loading</div>
        </section>
      );
    } else {
      const { title, movieBanerUrl, moviePrice, downloads, description,imdbRating,category } =
        this.state.Movie;
      return (
        <section className="movie-page">
          <div className="movie-container">
            <div className="movie-preview">
             <div  className="feature-preview"
          
          style={{ backgroundImage: `url(${movieBanerUrl })` }} 
            >

                <div className="overlay ">
                  <div className="feature-info">

                  <div className="feature-title">{title}</div>
                  <div className="feature-desc"> { description }</div>

                                  <div className="feature-rating">
                                      <i class='bx bxs-star' ></i>
                                      
                         <span> {imdbRating}/10</span>
            </div>         
                   
                                  <div className="feature-buy">
                                        <i class='bx bx-play-circle'></i>      
                         <span>Buy Now</span>
            </div>

                </div>
                
                </div>
  
                          <div className="movie-preview-cart">
                              <i class='bx bxs-cart-alt'></i>
              </div>
         
        </div>
                  
            </div>
                  <div className="movie-details">
                    
  </div>
            
          </div>
        
          <div className="movie-related"></div>
          
              
              

          </section>
      );
    }
  }
}

export default MoviePage;
