import React from "react";
import { Link } from "react-router-dom";
import "./HomeRecord.css";
import { fights } from "../../data/fightData";

const HomeRecord: React.FC = () => {
  const wins = fights.filter((f) => f.result === "W").length;
  const losses = fights.filter((f) => f.result === "L").length;
  const draws = fights.filter((f) => f.result === "D").length;

  return (
    <div className="home-record-container">
      <h2 className="record-strip-title">Professional Record</h2>

      <div className="record-strip-card" role="group" aria-label="Career record summary">
        <div className="record-strip-grid">
          <div className="record-strip-stat">
            <span className="strip-stat-number wins">{wins}</span>
            <span className="strip-stat-label">Win</span>
          </div>
          <div className="record-strip-stat">
            <span className="strip-stat-number losses">{losses}</span>
            <span className="strip-stat-label">Loss</span>
          </div>
          <div className="record-strip-stat">
            <span className="strip-stat-number draws">{draws}</span>
            <span className="strip-stat-label">Draw</span>
          </div>
        </div>
      </div>

      <div className="view-all-button-container">
        <Link to="/record" className="view-all-button">
          View Full Record
        </Link>
      </div>
    </div>
  );
};

export default HomeRecord;
