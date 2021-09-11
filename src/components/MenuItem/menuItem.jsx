import React from "react";

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./menuItem.scss";

const MenuItem = ({ Category, history, match }) => {
  console.log(Category);

  const imageUrl = Category.categoryImageUrl;

  return (
    <div
      className="menu-item"
      onClick={() => history.push(`${match.url}${Category.categoryUrlpath}`)}
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className="menuItem-title">
        <h1 className="title">{Category.categoryName}</h1>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
