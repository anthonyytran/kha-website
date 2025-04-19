import React from "react";
import { Link } from "react-router-dom";
import "./HomeRecord.css";

const HomeRecord: React.FC = () => {
  return (
    <div className="record-card">
      <h2 className="record-title">Record</h2>
      <div className="record-stats">
        <div className="record-item">
          <div className="record-value wins">8</div>
          <div className="record-label">Wins</div>
        </div>
        <div className="record-item">
          <div className="record-value losses">1</div>
          <div className="record-label">Losses</div>
        </div>
        <div className="record-item">
          <div className="record-value draws">0</div>
          <div className="record-label">Draws</div>
        </div>
      </div>
      <div className="view-all-button-container">
        <Link to="/record" className="view-all-button">
          View All Fights
        </Link>
      </div>
    </div>
  );
};

export default HomeRecord;
