import React from "react";
import axios from "axios";
import "./playList.scss";
import { connect } from "react-redux";
import StreamMovieCard from '../../../components/reusable-Components/stream-movie-card/streamMovieCard'
import TitleBar from "../../../components/reusable-Components/titleBar/titleBar"

class PlayLists extends React.Component {
  state = {
    streamMovies: [],
    currentPlay: null,
  };

  getStreamMovies(userId) {
    const url = "users/" + userId + "/purches";

    setTimeout(() => {
      axios
        .get(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response.data);

          this.setState({
            streamMovies: response.data.purchesMovies,
            currentPlay: response.data.purchesMovies ? response.data.purchesMovies[0]: null,
          });
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }, 100);
  }

  setPlayUrl = (playMovie) => {
    this.setState({
      currentPlay: null,
    });

    console.log(this.state.currentPlay);
    this.setState({
      currentPlay: playMovie,
    });
  };

  componentDidMount() {
    this.getStreamMovies(this.props.currentUser.userId);
  }

  render() {
    return (
      <section className="movie-playList">
        <TitleBar title="Stream Now"/>
        <div className="movie-container">
          <div className="main-movie">
            <div className="movie">
              <video
                src={this.state.currentPlay ? this.state.currentPlay.movieVideoUrl: ""}
                controls
              ></video>
              <h3 className="movie-title">Now Playing {this.state.currentPlay ? this.state.currentPlay.title :""}</h3>
            </div>
          </div>

          <div className="movie-list">
            <TitleBar title="Stream PlayList"/>
         
                     {
            this.state.streamMovies.map((movie,index) => {
                if (movie === this.state.currentPlay) {
                     return (
                <div className="mov active">
                        <StreamMovieCard key={index} movie={movie} setPlayUrl={ this.setPlayUrl}/>
                </div>
                )
                } else {
                     return (
                <div className="mov">
                        <StreamMovieCard key={index} movie={movie} setPlayUrl={ this.setPlayUrl}/>
                </div>
                )
              }
               

            })
               
          } 


          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps, null)(PlayLists);
