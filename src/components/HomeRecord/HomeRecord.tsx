import React from "react";
import "./HomeRecord.css";

const HomeRecord = () => {
  return (
    <div className="record-card">
      <h2 className="record-title">Record</h2>
      <div className="record-stats">
        <div className="record-item">
          <div className="record-value wins">7</div>
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
    </div>
  );
};

export default HomeRecord;
