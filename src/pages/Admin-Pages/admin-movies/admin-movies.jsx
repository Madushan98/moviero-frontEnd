import React from 'react';
import {LinkContainer, Table, Button} from 'react-bootstrap'
import axios from 'axios';
import './admin-movies.scss'
import PaginationComponent from '../../../components/reusable-Components/pagination/pagination'
import {Link} from 'react-router-dom'

class AdminMovieList extends React.Component {

    state = {
        movies: [],
        currentPage: 0,
        pageCount: 0,
    loading: false,
    }



    getMovies(getMoviesUrl) {
           setTimeout(() => {

           

           

 axios.get(getMoviesUrl,{
                headers: {
                    Authorization: localStorage.getItem('token'), 
                },
            })
     .then(response => {
         
         this.setState({
             movies: response.data.content,
               pageCount: response.data.totalPages,
         })
         console.log(this.state.movies);
         
       
     })
        .catch(error => {
         
              
            console.error('There was an error!', error);
        });  

        }
            , 100)

    }



     handlePageChange = (page) => {
    this.setState({ currentPage: page - 1 });
    const pageNumber = page - 1;
    
    const url =
      "movies"+  "?page=" + pageNumber + "&limit=8";

 
    
    this.getMovies(url);
  };

  
    
    componentDidMount() {
         const getMoviesUrl =    "movies"+  "?page=" + 0 + "&limit=10";
        this.getMovies( getMoviesUrl);
    }



    render() {
    
        return (
            <div className="admin-movieList">
                <h1 className="admin-movieList-title">Movie List</h1>
                <div className="admin-movieList-table">
                    <Table  bordered hover >
                        <thead>
                         <th >Movie ID</th>
                            <th>Title</th>
                            <th>Price</th>
                         <th>Category</th>
                        <th>ReleaseDate</th>
                        <th>Added Date</th>
                            <th>Downloads</th>
                            <th></th>
                         </thead>
                        <tbody>
                            {this.state.movies.map((movie,index) => (
                                <tr key={index}>
                                    <td>{movie.movieId}</td>
                                    <td>{movie.title}</td>
                                    <td>{movie.moviePrice}</td>
                                    <td>{movie.movieCategory}</td>
                                    <td>{movie.releaseDate}</td>
                                    <td>{movie.addToMoviesDate}</td>
                                    <td>{movie.downloads}</td>
                                    <td>
                                        <Button >
                                               <Link
  to={{
    pathname: `/movie/${movie.movieId}`,
  
  }}
>
                                           
                                            <i class='bx bx-edit-alt'></i>
</Link>
                                        </Button>
                                    </td>
                                </tr>

                            ))
                            
                            
                            }
                        </tbody>
                  </Table>


                </div>

                 <div className="movie-list-pagination">
          <PaginationComponent
            currentPage={this.state.currentPage}
            pageCount={this.state.pageCount}
            onPageChange={this.handlePageChange}
          />
        </div>
            </div>

        );
}

}


export default AdminMovieList;