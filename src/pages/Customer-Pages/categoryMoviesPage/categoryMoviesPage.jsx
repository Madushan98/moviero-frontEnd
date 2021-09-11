import React from 'react';
import { Route } from 'react-router-dom'
import MovieList from '../../../components/movieList/movieList'


class CategoryMovies extends React.Component {



    render() {
  const { match } = this.props;

        return (
            <section className="category-movies">
         
            <Route exact path={`${match.path}/:categoryId`} component={MovieList} />
            </section>
        )
    }
}

export default CategoryMovies;