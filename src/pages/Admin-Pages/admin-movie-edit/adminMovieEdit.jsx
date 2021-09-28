import React from "react";
import "./adminMovieEdit.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { Form, Row, Col, Button } from "react-bootstrap";
import TitleBar  from "../../../components/reusable-Components/titleBar/titleBar"
class MovieDetailsEdit extends React.Component {
  state = {
    editable: true,
    movie: null,
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
            movie: res.data,
          });

          console.log(this.state.Movie);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 500);
  }

   
    updateMovieDetails( data) {
         const movieId = this.props.match.params.movieId;

         const uploadUrl = "admin/edit/" +movieId;
    axios
      .put(uploadUrl, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);

      
      }).catch((err) => {
        console.log(err);
     
        });
  }  
    
  handleUpdate = async (e) => {
    e.preventDefault();

    const releasedate = moment(this.releaseDate).format("DD/MM/YYYY");
    console.log(releasedate);

       const {
        title,
        description,
        moviePrice,
        releaseDate,
        imdbRating,
       
      } = this.state.movie;
    const movie = {
      title: this.title  == undefined ? title : this.title,
      moviePrice: this.moviePrice == undefined ? moviePrice : this.moviePrice,
      description: this.movieDescription  == undefined ? description : this.movieDescription,
    
      imdbRating: this.movieRating == undefined ? imdbRating : this.movieRating,
      };
      
      this.updateMovieDetails(movie);
       console.log(movie);
  };

    
    
    
    
  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    console.log(movieId);
    this.getMovieDetails(movieId);
  }

  render() {
    if (this.state.movie == null) {
      return (
        <section className="movie-page">
          <div className="movie-container">Loading</div>
        </section>
      );
    } else {
      const {
        title,
        description,
        moviePrice,
        releaseDate,
        imdbRating,
        movieBanerUrl,
        movieImageUrl,
        movieVideoUrl,
      } = this.state.movie;
      return (
          <section className="edit-movie">
          <TitleBar title={"Edit Movie Details"} />
          <div className="upload-info">
            <Form onSubmit={this.handleUpdate}>
              <fieldset disabled={!this.state.editable}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Movie Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={title}
                    onChange={(event) => (this.title = event.target.value)}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Movie Rating</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder={imdbRating}
                      step="0.01"
                      onChange={(event) =>
                        (this.movieRating = event.target.value)
                      }
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder={moviePrice}
                      step="0.01"
                      onChange={(event) =>
                        (this.moviePrice = event.target.value)
                      }
                    />
                  </Form.Group>
                </Row>

              
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Movie Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder={description}
                    onChange={(event) =>
                      (this.movieDescription = event.target.value)
                    }
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="button">
                  Submit
                </Button>
              </fieldset>
            </Form>
          </div>
        </section>
      );
    }
  }
}

export default MovieDetailsEdit;
