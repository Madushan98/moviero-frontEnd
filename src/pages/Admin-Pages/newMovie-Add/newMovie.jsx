import React from "react";
import { Link } from "react-router";
import UploadDetails from "../../../components/uplaodDetails/uploadDetails";
import { Form, Row, Col, Button,ProgressBar } from "react-bootstrap";
import "./newMovie.scss";
import axios from "axios";
class NewMovieUpload extends React.Component {
  state = {
    videoLink: null,
    bannerLink: null,
    thumbnailLink: null,
    selectedThumbnailFile: null,
    selectedBannerFile: null,
    selectedVideoFile: null,
    movieUploading: 0.00,
  };


  cloudinaryUpload(){
    const url = "https://api.cloudinary.com/v1_1/dui8rkfs5/video/upload";
    const uploadPreset = "k819sbxl";
    
     const data = new FormData();
    data.append("upload_preset", uploadPreset);
      data.append("file", this.state.selectedVideoFile);
 axios
      .post(
        url,
        data,
        
        {
          onUploadProgress: (ProgressEvent) => {
            this.setState({
              movieUploading: (ProgressEvent.loaded / ProgressEvent.total*100),
            })

           
          },
        }
      )
      .then((result) => {
        console.log(result.data);
  const uploadUrl = result.data["url"];
     console.log(result.data["url"]);
localStorage.setItem("uploadUrl", uploadUrl);
      
      });

  }

  uploadWidget = () => {
    console.log("uploadWidget");

    window.cloudinary.openUploadWidget(
      {
        cloud_name: "dui8rkfs5",
        upload_preset: "k819sbxl",
        tags: ["miniflix"],
        sources: ["local"],
      },
      function (error, result) {

        if (result != null) {
            const uploadUrl = result[0]["url"];
        console.log(uploadUrl);
        localStorage.setItem("uploadUrl", uploadUrl);
        }
      
      }
    );
  };

  setUrl() {
    const Url = localStorage.getItem("uploadUrl");
    this.setState({
      videoLink: Url,
    });
  }

  uploadBanner() {
    const uploadUrl = "/file/imageUpload";
    const data = new FormData();
    data.append("file", this.state.selectedBannerFile);
    axios
      .post(
        uploadUrl,
        data,
        {
          headers: {
            Authorization: localStorage.getItem("token"), //here remove + in template litereal
          },
        },
        {
          onUploadProgress: (ProgressEvent) => {
            // this.setState({
            //   loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
            // })
          },
        }
      )
      .then((res) => {
        console.log(res.data);

        this.setState({
          bannerLink: res.data["fileDownloadUri"],
        });
      });
  }

  uploadThumbnail() {
    const uploadUrl = "/file/imageUpload";
    const data = new FormData();
    data.append("file", this.state.selectedThumbnailFile);
    axios
      .post(
        uploadUrl,
        data,
        {
          headers: {
            Authorization: localStorage.getItem("token"), //here remove + in template litereal
          },
        },
        {
          onUploadProgress: (ProgressEvent) => {
            // this.setState({
            //   loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
            // })
          },
        }
      )
      .then((res) => {
        console.log(res.data);

        this.setState({
          thumbnailLink: res.data["fileDownloadUri"],
        });

        console.log();
      });
  }
  handleThumbnailFile = (event) => {
    this.setState({
      selectedThumbnailFile: event.target.files[0],
      //  loaded: 0,
    });
  };
  handleBannerFile = (event) => {
    this.setState({
      selectedBannerFile: event.target.files[0],
      //  loaded: 0,
    });
  };

    handleVideoFile = (event) => {
    this.setState({
      selectedVideoFile: event.target.files[0],
      //  loaded: 0,
    });
  };



  render() {
    return (
      <section className="upload-movie">
        <div className="upload-info ">
         
  <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Movie Video Upload</Form.Label>
            <Form.Control
              type="file"
              size="sm"
              onChange={this.handleVideoFile}
            />
             </Form.Group>
<ProgressBar  now={this.state.movieUploading} label={`${this.state.movieUploading}%`} />
            <Button
            className="button"
            variant="primary"
            type="submit"
            onClick={() => this.cloudinaryUpload()}
          >
            Upload
          </Button>

          <Form.Group  className="mb-3">
             <Form.Label>Movie Link </Form.Label>
            <Form.Control
              placeholder={
                this.state.videoLink == null
                  ? "No Movie Link Set"
                  : this.state.videoLink
              }
              disabled
            />
          </Form.Group>
          <Button
            className="button"
            variant="primary"
            type="submit"
            onClick={() => this.setUrl()}
          >
            Set
          </Button>

          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Movie Thumbnail Upload</Form.Label>
            <Form.Control
              type="file"
              size="sm"
              onChange={this.handleThumbnailFile}
            />
            <Form.Group  className="mb-3">
           
              <Form.Control className="form-details"
                placeholder={
                  this.state.thumbnailLink == null
                    ? "No Movie Link Set"
                    : this.state.thumbnailLink
                }
                disabled
              />
            </Form.Group>
          </Form.Group>
          <Button
            className="button"
            variant="primary"
            type="submit"
            onClick={() => this.uploadThumbnail()}
          >
            Set
          </Button>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Movie Banner Upload</Form.Label>
            <Form.Control
              type="file"
              size="sm"
              onChange={this.handleBannerFile}
            />
            <Form.Group  className="mb-3">
             
              <Form.Control className="form-details"
                placeholder={
                  this.state.bannerLink == null
                    ? "No Movie Link Set"
                    : this.state.bannerLink
                }
                disabled
              />
            </Form.Group>
          </Form.Group>
          <Button
            className="button"
            variant="primary"
            type="submit"
            onClick={() => this.uploadBanner()}
          >
            Set
          </Button>
        </div>

        <div className="upload-details">
          <UploadDetails uploadBannerUrl={this.state.bannerLink} uploadThumbnailUrl={this.state.thumbnailLink} uploadMovieUrl={this.state.videoLink}/>
        </div>
      </section>
    );
  }
}

export default NewMovieUpload;
