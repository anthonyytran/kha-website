import React, { useState } from "react";
import { ChevronDown, Trophy } from "lucide-react";
import "./Record.css";
import { fights } from "../../data/fightData.tsx";

const Record: React.FC = () => {
  const [expandedFightId, setExpandedFightId] = useState<number | null>(null);
  const toggleExpand = (id: number) =>
    setExpandedFightId((prevId) => (prevId === id ? null : id));

  const wins = fights.filter((f) => f.result === "W").length;
  const losses = fights.filter((f) => f.result === "L").length;
  const draws = fights.filter((f) => f.result === "D").length;

  const resultLabel = { W: "Win", L: "Loss", D: "Draw" } as const;

  return (
    <div className="record-container">
      <h1>Record</h1>

      <div className="total-record-container" role="group" aria-label="Career record summary">
        <div className="record-grid">
          <div className="record-stat">
            <span className="stat-number wins">{wins}</span>
            <span className="stat-label">Win</span>
          </div>
          <div className="record-stat">
            <span className="stat-number losses">{losses}</span>
            <span className="stat-label">Loss</span>
          </div>
          <div className="record-stat">
            <span className="stat-number draws">{draws}</span>
            <span className="stat-label">Draw</span>
          </div>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="record-table" role="table">
          <caption className="sr-only">
            Complete professional boxing record for Kha Lu, {wins} wins, {losses} losses,{" "}
            {draws} draws, most recent fight first
          </caption>
          <thead role="rowgroup">
            <tr role="row">
              <th scope="col" role="columnheader" className="result-col">
                Result
              </th>
              <th scope="col" role="columnheader" className="date-col">
                Date
              </th>
              <th scope="col" role="columnheader" className="opponent-col">
                Opponent
              </th>
              <th scope="col" role="columnheader" className="record-col">
                Record
              </th>
              <th scope="col" role="columnheader" className="toggle-col">
                <span className="sr-only">Details</span>
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            {fights.map((fight) => {
              const isExpanded = expandedFightId === fight.id;
              const detailsId = `details-${fight.id}`;
              return (
                <React.Fragment key={fight.id}>
                  <tr
                    role="row"
                    className={`record-row ${isExpanded ? "expanded-row" : ""}`}
                    onClick={() => toggleExpand(fight.id)}
                  >
                    <td role="cell" className="result-col">
                      <span
                        className={`result-box ${
                          fight.result === "W" ? "win" : fight.result === "L" ? "loss" : "draw"
                        }`}
                        aria-hidden="true"
                      >
                        {fight.result}
                      </span>
                      <span className="sr-only">{resultLabel[fight.result]}</span>
                    </td>
                    <td role="cell" className="date-col">
                      {fight.date}
                    </td>
                    <td role="cell" className="opponent-col">
                      <span className="opponent-name">{fight.opponent}</span>
                      {fight.title && (
                        <span className="title-fight-badge">
                          <Trophy size={13} aria-hidden="true" />
                          {fight.title}
                        </span>
                      )}
                    </td>
                    <td role="cell" className="record-col">
                      {fight.record}
                    </td>
                    <td role="cell" className="toggle-col">
                      <button
                        type="button"
                        className="toggle-button"
                        aria-expanded={isExpanded}
                        aria-controls={detailsId}
                      >
                        <span className="sr-only">
                          {isExpanded ? "Hide" : "Show"} fight details vs {fight.opponent}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`toggle-icon ${isExpanded ? "open" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr
                    role="row"
                    className={`details-row ${isExpanded ? "open" : ""}`}
                    id={detailsId}
                    hidden={!isExpanded}
                  >
                    <td role="cell" colSpan={5}>
                      <div className="details-content">
                        <p>
                          <strong>Weight:</strong> {fight.weight}
                        </p>
                        <p>
                          <strong>Venue:</strong> {fight.venue}
                        </p>
                        {fight.rounds && (
                          <p>
                            <strong>Rounds:</strong> {fight.rounds}
                          </p>
                        )}
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Record;
