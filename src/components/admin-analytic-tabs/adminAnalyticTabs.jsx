import React from "react";

import './adminAnalyticTabs.scss'

class AnalyticTabs extends React.Component {
  render() {
    return (
      <div className="analytic-tab">
        <div className="tab-item">
          <span className="tab-title">Total Revenue</span>
          <div className="tab-item-container">
            <span className="tab-info">$2,415</span>     
          </div>
        </div>
        <div className="tab-item">
          <span className="tab-title">Total Downloads</span>
          <div className="tab-item-container">
            <span className="tab-info">2000
            <i class='bx bx-down-arrow-alt'></i>
            </span>
         
          </div>
        
        </div>
        <div className="tab-item">
          <span className="tab-title">Total Movies</span>
          <div className="tab-item-container">
            <span className="tab-info">200
              <i class='bx bx-movie-play'></i>
            </span>
        
          </div>
          
        </div>
      </div>
    );
  }
}

export default AnalyticTabs;