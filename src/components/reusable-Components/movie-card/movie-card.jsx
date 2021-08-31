import React from 'react';

import './movie-card.scss'



const MovieCard = () => {


  const imageUrl = "https://i.ibb.co/bdfMq7q/Romance.jpg";
    return (
        <div className="movie-Card">
            <div className="movie-img"  style={{ backgroundImage: `url(${imageUrl})` }} >
              
            </div>

            <div className="movie-detail">
 <div className="movie-desc">
                <div className="movie-title">
                    Rouge One
                </div>
                <div className="movie-category">
                    Action
                </div>
                <div className="movie-price">
                    $12.50
                 </div>
                </div>
                 <div className="movie-cart">
                   <span>Add to Cart</span> 
            </div>
            </div>
           

            
        </div>
    )
}

export default MovieCard;