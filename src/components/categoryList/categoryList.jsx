import React from "react";

import { ListGroup } from "react-bootstrap";
import _ from "lodash";
const CategoryList = (props) => {
  const { onChangeCategory, Categories, selectedCategory } = props;

  const Categories1 = [...Categories];

  return (
    <section>
      <ListGroup>
        <ListGroup.Item
          active={selectedCategory === "all"}
          onClick={() => onChangeCategory("all")}
        >
          All Movies
        </ListGroup.Item>

        {Categories1.map((item, index) => {
          return (
            <ListGroup.Item
              key={index}
              active={selectedCategory === item.categoryName}
              onClick={() => onChangeCategory(item.categoryName)}
            >
              {item.categoryName}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </section>
  );
};

export default CategoryList;
