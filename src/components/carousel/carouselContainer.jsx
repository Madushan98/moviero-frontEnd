import React from 'react';

import {Carousel} from 'react-bootstrap'



const CarouselContainer = (props) => {
        
 
  
  const {previewMovies} = props;
  

  const imageUrl = "https://i.ibb.co/SwrbMP3/s-2.jpg";
  const imageUrl2 = "https://i.ibb.co/BKwMvDy/s-3.jpg"

  if (previewMovies.length > 0) {
     return (


  <Carousel   autoPlay={true}  animation="false"
    interval={3000}
    controls={false}
         indicators={true}
      
       >
 {
        previewMovies.map((previewMovie,index) => {
              
         
          return (
         
              
        
            <Carousel.Item key={index} >
    <div  className="feature-carousel"
          
          style={{ backgroundImage: `url(${imageUrl})` }} 
            >

                <div className="overlay ">
                  <div className="feature-info">

                  <div className="feature-title">{previewMovie.title}</div>
                  <div className="feature-desc"> { previewMovie.description }</div>

                        <div className="more-info">
                         <span>More Info</span>
            </div>

                </div>
                
                </div>
  
              
         
        </div>
              </Carousel.Item>)
              
})
        }
</Carousel>
        )
            

  } else return (
    <div>
    
    </div>
  )
 


}


export default CarouselContainer;