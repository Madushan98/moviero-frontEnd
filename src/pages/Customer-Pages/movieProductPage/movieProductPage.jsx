import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./movieProductPage.scss";
import { connect } from "react-redux";

class MoviePage extends React.Component {
  state = {
    Movie: null,
  };

  buyMovie(movieId, userId) {
    const message = (errorMessage) =>
      toast(errorMessage, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    const url = "http://localhost:8000/users/" + userId + "/purches";

    const movies = {
      movies: [movieId],
    };
    setTimeout(() => {
      axios
        .put(url, movies, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response);

          message("Buy SuccessFul");
        })
        .catch((error) => {
          message("Please Try Again");
          console.error("There was an error!", error);
        });
    }, 100);
  }

  addToCart(movieId, userId) {
    const message = (errorMessage) =>
      toast(errorMessage, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    const url = "users/" + userId + "/cart/" + movieId;
   
      axios
        .put(
          url,
          {},
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(response);

          message("Movie Is Added to Cart");
        })
        .catch((error) => {
          message("Please Try Again");
          console.error("There was an error!", error);
        });

  }

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
    const imageUrl = "https://i.ibb.co/SwrbMP3/s-2.jpg";
    if (this.state.Movie === null) {
      return (
        <section className="movie-page">
          <div>Loading</div>
        </section>
      );
    } else {
      const {
        title,
        movieBanerUrl,
        moviePrice,
        downloads,
        description,
        imdbRating,
        movieCategory,
        releaseDate,
        movieId,
      } = this.state.Movie;
      return (
        <section className="movie-page">
          <div>
            <ToastContainer />
          </div>

          <div className="movie-preview">
            <div className="preview">
              <div
                className="preview-top"
                style={{
                  backgroundImage: `url(${
                    movieBanerUrl ? movieBanerUrl : imageUrl
                  })`,
                }}
              ></div>
              <div className="preview-sideDetails">
                <div className="preview-title">
                  <div className="title">{title}
                   <hr></hr>
                  </div>
                  <div className="year">{releaseDate.slice(0, 4)}</div>
                      <div className="price">${moviePrice}</div> 
                  <div className="category">{movieCategory}</div>
                </div>

                <div
                  className="cart-button"
                  onClick={() =>
                    this.addToCart(movieId, this.props.currentUser.userId)
                  }
                >
                  Add To Cart
                  <i class='bx bx-cart-alt'></i>
                </div>
                <div
                  className="buy-button"
                  onClick={() =>
                    this.buyMovie(movieId, this.props.currentUser.userId)
                  }
                >
                  Buy the Movie
                   <i class='bx bxs-cart-alt' ></i>
                </div>

              
              </div>
            </div>

            <div className="preview-description">
              <div className="plot">
                Plot
                <hr></hr>
              </div>

              <div className="description">{description}</div>
            </div>
          </div>
        </section>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps, null)(MoviePage);
