import React from "react";
import DropDownComponent from "../dropdown/dropdown";
import "./searchBar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllCategories } from "../../../redux/categories/categories.action";
class SearchBar extends React.Component {
  state = {
    title: "",
    sortBy: "All",
    categories: [],
  };

  componentDidMount() {
    const { fetchAllCategories } = this.props;

    fetchAllCategories();

    console.log(this.props.categories);
  }

  handleFilter = (category) => {
    this.setState({ sortBy: category });
  };

  render() {
    return (
      <section className="searchBox">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={(event) => this.setState({ title: event.target.value })}
          />
        </div>

        <div className="search-filter">
          <DropDownComponent
            onFilter={this.handleFilter}
            categories={this.props.categories}
            title={this.state.sortBy}
          />
        </div>
        <div className="search-button">
          <button type="submit">
            <Link
              to={{
                pathname: `/search/${this.state.title}/${this.state.sortBy}`,
              }}
            >
              {" "}
              <i className="bx bx-search-alt-2"></i>
            </Link>
          </button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.Categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCategories: () => dispatch(fetchAllCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
