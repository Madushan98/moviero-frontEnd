import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./uploadDetails.scss";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment'
class UploadDetails extends React.Component {
  state = {
    message: null,
    categories: [],
  
  };

  getCategories() {
    setTimeout(
      () => {
        axios
          .get("categories", {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          })
          .then((res) => {
            this.setState({
              categories: res.data,
             
            });
            this.movieCategory = res.data[0];
          })
          .catch((err) => {
            console.error(err);
          });
      },

      500
    );
  }

  uploadMovie(data) {
    const message = (errorMessage) => toast(errorMessage,
    {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
}
    );
    const uploadUrl = "movies";
    axios
      .post(uploadUrl, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
message("SuccesFully Uploaded");
      
      }).catch((err) => {
        console.log(err);
        message("Please Try Again");
        });
  }



  handleSubmit = async (e) => {
    e.preventDefault();

    
   
 const releasedate =  moment(this.releaseDate).format("DD/MM/YYYY") 
                    console.log( releasedate)
    const movie = {
      title: this.title,
      moviePrice: this.moviePrice,
      movieCategory: this.movieCategory == undefined ? this.state.categories[0] : this.movieCategory,
      description: this.movieDescription,
     movieVideoUrl: this.props.uploadMovieUrl,
      releaseDate: releasedate,
      imdbRating: this.movieRating,
      movieBanerUrl: this.props.uploadBannerUrl,
      movieImageUrl: this.props.uploadThumbnailUrl,
    };

    this.uploadMovie(movie);
    console.log(movie);
  };

  componentDidMount() {
    this.getCategories();
  }

  render() {
   
   
    const { uploadBannerUrl, uploadThumbnailUrl, uploadMovieUrl } = this.props;

    console.log(uploadMovieUrl);

    return (
      // || uploadThumbnailUrl == null || uploadBannerUrl == null
      <div className="upload-info">
        <div>
        <ToastContainer />
      </div>
        <Form onSubmit={this.handleSubmit}>
          <fieldset disabled={uploadMovieUrl == null ? true : false}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control type="text" placeholder="Movie Title"  onChange={(event) => (this.title = event.target.value)} />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="dob">
                <Form.Label>Select Date</Form.Label>
                <Form.Control
                  type="date"
                  name="dor"
                  placeholder="Date of Release"
                  onChange={(event) =>
                    
                  {
                    this.releaseDate = event.target.value
                     
                  }}
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
                  placeholder="Ex: 16.50" step="0.01"
                  onChange={(event) => (this.moviePrice = event.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Movie Rating</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ex: 8.0" step="0.01"
                  onChange={(event) => (this.movieRating = event.target.value)}
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
                  {this.state.categories.map((category, index) => {
                    return <option key={index}>{category.categoryName}</option>;
                  })}
                </Form.Select>
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
                onChange={(event) =>
                  (this.movieDescription = event.target.value)
                }
              />
            </Form.Group>

            <Button 
              variant="primary"
              type="submit" className="button"
             
            >
              Submit
            </Button>
          </fieldset>
        </Form>
                

      </div>
    );
  }
}

export default UploadDetails;
