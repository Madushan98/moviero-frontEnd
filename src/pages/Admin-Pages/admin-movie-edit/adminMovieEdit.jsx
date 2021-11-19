import React from "react";
import "./adminMovieEdit.scss";
import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";
import TitleBar from "../../../components/reusable-Components/titleBar/titleBar";
import { connect } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastMessage from "../../../Toast/toastMessage";


class MovieDetailsEdit extends React.Component {
  state = {
    editable: true,
    movie: null,
   
  };

  getMovieDetails(movieId) {
    const url = "/movies/mov/" + movieId;

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
 
        })
        .catch((err) => {
       
             toastMessage("Please Try Again");
        });
    }, 500);
  }

  updateMovieDetails(data) {
    const movieId = this.props.match.params.movieId;

    const uploadUrl = "admin/edit/" + movieId;
    axios
      .put(uploadUrl, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
      toastMessage("Movie Updated");
      })
      .catch((err) => {
    
          toastMessage("Please Try Again");
      });
  }

  handleUpdate = async (e) => {
    e.preventDefault();

 

    const { title, description, moviePrice,imdbRating ,movieCategory } =
      this.state.movie;
    const movie = {
      title: this.title  ? this.title : title ,
      moviePrice: this.moviePrice ? this.moviePrice : moviePrice,
      description:
        this.movieDescription ? this.movieDescription : description,
      movieCategory: this.movieCategory ? this.movieCategory : movieCategory,
      imdbRating: this.movieRating  ?  this.movieRating : imdbRating,
    };

    this.updateMovieDetails(movie);
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
        imdbRating,
        movieBanerUrl,
        movieImageUrl,
        movieCategory,
      } = this.state.movie;

  
      return (
        <section className="edit-movie">
             <div>
             <ToastContainer />
             </div >


          <TitleBar title={"Edit Movie Details"} />

          <div className="edit-movie-preview">
           
            <div className="edit-movie-image">
              <img src={movieImageUrl} alt= "No Link"/>
            </div>
   <div className="edit-movie-banner">
              <img src={movieBanerUrl} alt= "No Link"/>
            </div>
          </div>


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
                    <Form.Label>Select Category</Form.Label>
                    <Form.Select
                      
                      aria-label="Floating label select example"
                      onChange={(event) =>
                        (this.movieCategory = event.target.value)
                      }
                    
                    >
                      {this.props.categories.map((category, index) => {

                        if (movieCategory === category.categoryName) {
                          return (
                          
                          <option key={index} selected >{category.categoryName}</option>
                        );
                        } else {
                            return (
                          
                          <option key={index} >{category.categoryName}</option>
                        );
                       }
                      
                      })}
                    </Form.Select>
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

const mapStateToProps = (state) => {
  return {
    categories: state.categories.Categories,
  };
};

export default connect(mapStateToProps,null)(MovieDetailsEdit);
