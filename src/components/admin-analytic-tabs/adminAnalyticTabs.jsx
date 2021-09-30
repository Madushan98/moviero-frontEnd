import React from "react";
import axios from "axios";
import "./adminAnalyticTabs.scss";

class AnalyticTabs extends React.Component {
  state = {
    analytics: null, //
  };

  getAnalytics() {
    const url = "/admin/analytics";
    setTimeout(() => {
      axios
        .get(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.setState({
            analytics: res.data,
          });

          console.log(this.state.analytics);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 500);
  }

  componentDidMount() {
    this.getAnalytics();
  }

  render() {
    if (this.state.analytics == null) {
      return <div>Loading</div>;
    } else {
      const { totalDownloads, totalMovies, totalRevenue, totalUsers } =
        this.state.analytics;

      return (
        <div className="analytic-tab">
          <div className="tab-item">
            <span className="tab-title">Total Revenue</span>
            <div className="tab-item-container">
              <span className="tab-info">${totalRevenue.toFixed(2)}</span>
            </div>
          </div>
          <div className="tab-item">
            <span className="tab-title">Total Downloads</span>
            <div className="tab-item-container">
              <span className="tab-info">
                {totalDownloads}
                <i class="bx bx-down-arrow-alt"></i>
              </span>
            </div>
          </div>
          <div className="tab-item">
            <span className="tab-title">Total Movies</span>
            <div className="tab-item-container">
             
              <span className="tab-info">
                   <i class="bx bx-movie-play"></i>
                {totalMovies}
              
              </span>
            </div>
          </div>
           <div className="tab-item">
            <span className="tab-title">Total Users </span>
            <div className="tab-item-container">
               
              <span className="tab-info">
                 <i class='bx bx-user'></i>
                {totalUsers}
             
              </span>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default AnalyticTabs;
