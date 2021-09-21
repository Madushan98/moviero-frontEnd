import React from "react";

import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const CarouselContainer = (props) => {
  const { previewMovies } = props;

  const imageUrl = "https://i.ibb.co/SwrbMP3/s-2.jpg";
 



  if (previewMovies.length > 0) {
    return (
      <Carousel
        autoPlay={true}
        animation="false"
        interval={3000}
        controls={false}
        indicators={true}
      >
        {previewMovies.map((previewMovie, index) => {
          return (
            <Carousel.Item key={index}>
              <div
                className="feature-carousel"
                style={{
                  backgroundImage: `url(${previewMovie.movieBanerUrl ? previewMovie.movieBanerUrl : imageUrl })`,
                }}
              >
                <div className="overlay ">
                  <div className="feature-info">
                    <div className="feature-title">{previewMovie.title}</div>
                    <div className="feature-desc">
                      {" "}
                      {previewMovie.description}
                    </div>

                    <div className="more-info">
                      <Link
                        to={{
                          pathname: `/movie/${previewMovie.movieId}`,
                        }}
                      >
                        <span>More Info</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  } else return <div></div>;
};

export default CarouselContainer;
