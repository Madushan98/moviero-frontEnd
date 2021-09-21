import React from "react";
import axios from "axios";
import { Table} from 'react-bootstrap'

import './adminUserList.scss'
class AdminUserList extends React.Component {
  state = {
    users: [],
  };

  getUsers() {
    const url = "/admin/users";
    setTimeout(() => {
      axios
        .get(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.setState({
            users: res.data,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }, 500);
  }

    componentDidMount() {
        this.getUsers();
    }
    
  render() {
    return (
      <section className="admin-user-list">
        <div className="user-table">
                <Table hover>
                    
            <thead>
              <th>UserID</th>
              <th>UserName</th>
              <th>E-Mail</th>
           </thead>
             <tbody>
            {this.state.users.map((user, index) => (
              <tr className="data-row" key={index}>
                <td className="table-data-1">
                        <div>{user.userId}</div>
                </td>
                <td className="table-data-2">
                  <div>{user.userName}</div>
                </td>
                    <td className="table-data-3">{ user.email}</td>
              </tr>
            ))}
             </tbody>
          </Table>
        </div>
      </section>
    );
  }
}


export default AdminUserList;