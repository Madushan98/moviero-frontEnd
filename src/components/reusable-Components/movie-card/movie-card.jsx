import React from 'react';
import axios from "axios";
import { connect } from "react-redux"
import './movie-card.scss'
import {Link} from 'react-router-dom'



class MovieCard extends React.Component {


  

addToCart(movieId,userId){

    const url = "http://localhost:8000/users/" + userId + "/cart/" + movieId;
setTimeout(() => {
         
 axios.put(url,{},{
                headers: {
                    Authorization: localStorage.getItem('token'), 
                },
            })
     .then(response => {
         
       console.log(response);
         
       
     })
        .catch(error => {
         
                   
            console.error('There was an error!', error);
        });  

        }
    , 100)

}



  render() {

    const { movie,currentUser } = this.props;
const imageUrl = "https://i.ibb.co/bdfMq7q/Romance.jpg";
    return (
        <div className="movie-Card">

            <Link
  to={{
    pathname: `/movie/${movie.movieId}`,
  
  }}
>
 
                  <div className="movie-img"  style={{ backgroundImage: `url(${imageUrl})` }} >
              
            </div>
</Link>

         
          

            <div className="movie-detail">
 <div className="movie-desc">
                <div className="movie-title">
                    {movie.title}
                </div>
                <div className="movie-category">
                    {movie.movieCategory}
                </div>
                <div className="movie-price">
                    ${movie.moviePrice}
                 </div>
                </div>
                 <div className="movie-cart"   onClick={() => this.addToCart(movie.movieId,currentUser.userId)}>
                   <span>Add to Cart</span> 
            </div>
            </div>
           

            
        </div>

    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    loading: state.user.loading,
  };
};

export default connect(mapStateToProps, null)(MovieCard);








// const MovieCard = ({movie}) => {

    

//   const imageUrl = "https://i.ibb.co/bdfMq7q/Romance.jpg";
//     return (
//         <div className="movie-Card">

//             <Link
//   to={{
//     pathname: `/movie/${movie.movieId}`,
  
//   }}
// >
 
//                   <div className="movie-img"  style={{ backgroundImage: `url(${imageUrl})` }} >
              
//             </div>
// </Link>

         
          

//             <div className="movie-detail">
//  <div className="movie-desc">
//                 <div className="movie-title">
//                     {movie.title}
//                 </div>
//                 <div className="movie-category">
//                     {movie.movieCategory}
//                 </div>
//                 <div className="movie-price">
//                     ${movie.moviePrice}
//                  </div>
//                 </div>
//                  <div className="movie-cart">
//                    <span>Add to Cart</span> 
//             </div>
//             </div>
           

            
//         </div>
//     )
// }







// addtoCart(cartId,userId){

//     const url = "http://localhost:8000/users/" + userId + "/cart/" + cartId;
// setTimeout(() => {

            

//             const userId = localStorage.getItem('userId')

//             const userUrl = 'users/' + userId;

//  axios.put(userUrl, user,{
//                 headers: {
//                     Authorization: localStorage.getItem('token'), //here remove + in template litereal
//                 },
//             })
//      .then(response => {
//           const updatedUser = response.data;
//                 dispatch(setCurrentUser(updatedUser));
//                 dispatch(fetchCurrentUser());
         
         
       
//      })
//         .catch(error => {
         
//                     dispatch(fetchErrorMessage(error.message));
//                     dispatch(fetchCurrentUser());
//             console.error('There was an error!', error);
//         });  

//         }
//     , 100)

// }