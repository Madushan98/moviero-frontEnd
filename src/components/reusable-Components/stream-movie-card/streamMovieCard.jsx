import React from "react"

import './streamMovieCard.scss'


const StreamMovieCard = ({movie, setPlayUrl}) => {

  const imageUrl = "https://i.ibb.co/bdfMq7q/Romance.jpg";
       

  
     const {title,description,movieVideoUrl,movieCategory,imdbRating,releaseDate,downloads,movieImageUrl } =  movie;
  

  
    return (

        
   
        <div className="purchased-movie">
          <div
            className="purchase-movie-img"
           style={{ backgroundImage: `url(${movieImageUrl ? movieImageUrl :imageUrl})` }}
          ></div>
          <div className="purchase-movie-info1">
            <div className="movie-title">{title}</div>
            <div className="movie-year">{releaseDate}</div>
          </div>
                    <div className="movie-category">{movieCategory}</div>
                        <div className="movie-rating">IMBD :{imdbRating}/10</div>
          <div className="movie-play"   onClick={()=>setPlayUrl(movie)}>
          <div
          
        
            
          >Play Now</div>
            <i className="bx bx-play-circle"></i>
          </div>
        </div>
       

    )
}

export default StreamMovieCard;