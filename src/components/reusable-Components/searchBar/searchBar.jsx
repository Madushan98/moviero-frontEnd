import React from 'react';
import DropDownComponent from '../dropdown/dropdown'
import './searchBar.scss'
import {Link} from 'react-router-dom'
import axios from 'axios';
class SearchBar extends React.Component {


    state = {
        title: "",
        sortBy: "All",
        Categories:[]
    }


    componentDidMount() {
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
              Categories: res.data,
            });

            console.log(this.state.Categories);
          })
          .catch((err) => {
            console.error(err);
          });
      },

      500
    );
    }

    handleFilter=(category) => {
        
        this.setState({sortBy: category})

    }


    render() {
        return (
            <section className="searchBox">
                <div className="search-input">
                   
       
                    
                    <input type="text" placeholder="Search.." name="search" onChange={(event) => (this.setState({title: event.target.value}))} />
                     

                   
                </div>
                
              
     
 
                <div className="search-filter">
                    <DropDownComponent onFilter={this.handleFilter} categories={this.state.Categories} title={ this.state.sortBy}/>

                </div>
                <div className="search-button">
                    <button type="submit">
                           <Link
  to={{
    pathname: `/search/${this.state.title}/${this.state.sortBy}`,
  
  }}
>  <i className='bx bx-search-alt-2'></i></Link>
                      </button>
                </div>


            </section>
        )
    }
}

export default SearchBar;