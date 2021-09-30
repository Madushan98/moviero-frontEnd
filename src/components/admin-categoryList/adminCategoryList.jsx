import React from "react";
import axios from "axios";
import { Table} from 'react-bootstrap'

import './adminCategoryList.scss'
class CategoryList extends React.Component {
  state = {
    categories: [],
  };

  getCategories() {
    const url = "categories";
    setTimeout(() => {
      axios
        .get(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.setState({
            categories: res.data,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }, 100);
  }

    componentDidMount() {
        this.getCategories();
    }
    
  render() {
    return (
      <section className="admin-category-list">
        <div className="admin-category-table">
                <Table hover>
                    
            <thead>
              <th>Category</th>
              <th>Total Movies</th>
            
           </thead>
             <tbody>
            {this.state.categories.map((category, index) => (
              <tr className="data-row" key={index}>
                <td className="table-data-1">
                        <div>{category.categoryName}</div>
                </td>
                <td className="table-data-2">
                  <div>{ category.movieCount }</div>
                </td>
                </tr>
            ))}
             </tbody>
          </Table>
        </div>
      </section>
    );
  }
}


export default CategoryList;