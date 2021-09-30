import React from "react";

import "./adminHome.scss";
import AnalyticTabs from "../../../components/admin-analytic-tabs/adminAnalyticTabs";
import AdminUserList from "../../../components/admin-userList/adminUserList";
import CategoryList from "../../../components/admin-categoryList/adminCategoryList";
class AdminPage extends React.Component {
  render() {
    return (
      <section className="admin-home">
        <AnalyticTabs />
        <div className="dataTables">
          <AdminUserList />
          <CategoryList />
        </div>
      </section>
    );
  }
}

export default AdminPage;
