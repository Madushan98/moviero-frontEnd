import React from 'react';
import DropDownComponent from '../../components/reusable-Components/dropdown/dropdown'
import './searchBar.scss'

class SearchBar extends React.Component {




    render() {
        return (
            <section className="searchBox">
                <div className="search-input">
                   
       
                    
                    <input type="text" placeholder="Search.." name="search" />
                     

                   
                </div>

              
     
 
                <div className="search-filter">
<DropDownComponent/>

                </div>
                <div className="search-button">
                     <button type="submit"> <i className='bx bx-search-alt-2'></i></button>
                </div>


            </section>
        )
    }
}

export default SearchBar;