import React, { useState } from "react";
import "./Record.css";

interface Fight {
  id: number;
  record: string;
  opponent: string;
  result: string;
  date: string;
  weight: string;
  venue: string;
  method: string;
  rounds: string;
}

const Record: React.FC = () => {
  const fights: Fight[] = [
    {
      id: 1,
      record: "7-0-0",
      opponent: "Katsunari Takayama",
      result: "TBD",
      date: "18-12-2024",
      weight: "TBA",
      venue: "The Melbourne Pavilion, Flemington",
      method: "TBD",
      rounds: "TBD",
    },
    {
      id: 2,
      record: "7-0-0",
      opponent: "Watcharin Buacharoen",
      result: "W",
      date: "16-03-2024",
      weight: "106½ lbs",
      venue: "The Melbourne Pavilion, Flemington",
      method: "W-UD",
      rounds: "5/5",
    },
    {
      id: 3,
      record: "6-0-0",
      opponent: "Thoedkiad Weerachon",
      result: "W",
      date: "02-12-2023",
      weight: "102½ lbs",
      venue: "The Melbourne Pavilion, Flemington",
      method: "W-TKO",
      rounds: "3/6",
    },
    {
      id: 4,
      record: "5-0-0",
      opponent: "Oatkowit Kamlangcharoey",
      result: "W",
      date: "16-09-2023",
      weight: "102½ lbs",
      venue: "The Melbourne Pavilion, Flemington",
      method: "W-TKO",
      rounds: "1/6",
    },
    {
      id: 5,
      record: "4-0-0",
      opponent: "Sirachat Soising",
      result: "W",
      date: "25-03-2023",
      weight: "105½ lbs",
      venue: "The Melbourne Pavilion, Flemington",
      method: "W-TKO",
      rounds: "2/4",
    },
    {
      id: 6,
      record: "3-0-0",
      opponent: "Gerttipong Kumsahwat",
      result: "W",
      date: "16-12-2022",
      weight: "103¾ lbs",
      venue: "The Melbourne Pavilion, Flemington",
      method: "W-UD",
      rounds: "6/6",
    },
    {
      id: 7,
      record: "2-0-0",
      opponent: "Gerttipong Kumsahwat",
      result: "W",
      date: "20-08-2022",
      weight: "108¾ lbs",
      venue: "The Melbourne Pavilion, Flemington",
      method: "W-UD",
      rounds: "4/4",
    },
    {
      id: 8,
      record: "1-0-0",
      opponent: "Prakob Nuankaew",
      result: "W",
      date: "19-03-2022",
      weight: "111½ lbs",
      venue: "The Melbourne Pavilion, Flemington",
      method: "W-MD",
      rounds: "4/4",
    },
  ];

  const [expandedFightId, setExpandedFightId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedFightId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="record-container">
      <h1>My Record</h1>

      <div className="total-record-container">
        <div className="record-grid">
          <div className="record-cell">
            <span className="wins">7</span>
          </div>
          <div className="record-cell">
            <span className="losses">0</span>
          </div>
          <div className="record-cell">
            <span className="draws">0</span>
          </div>
          <div className="record-cell">
            <span className="wins-label">Win</span>
          </div>
          <div className="record-cell">
            <span className="losses-label">Loss</span>
          </div>
          <div className="record-cell">
            <span className="draws-label">Draw</span>
          </div>
        </div>
      </div>

      <table className="record-table">
        <thead>
          <tr>
            <th className="result-col">Result</th>
            <th>Record</th>
            <th>Opponent</th>
            <th>Method</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {fights.map((fight) => (
            <React.Fragment key={fight.id}>
              <tr
                className={`record-row ${
                  expandedFightId === fight.id ? "expanded-row" : ""
                }`}
                onClick={() => toggleExpand(fight.id)}
              >
                <td className="result-col">
                  <div
                    className={`result-box ${
                      fight.result === "W" ? "win" : ""
                    }`}
                  >
                    {fight.result}
                  </div>
                </td>
                <td className="record-col">{fight.record}</td>
                <td className="opponent-col">{fight.opponent}</td>
                <td>{fight.method}</td>
                <td>{fight.date}</td>
              </tr>
              {expandedFightId === fight.id && (
                <tr className="details-row">
                  <td colSpan={5}>
                    <div className="details-content">
                      <p>
                        <strong>Weight:</strong> {fight.weight}
                      </p>
                      <p>
                        <strong>Venue:</strong> {fight.venue}
                      </p>
                      <p>
                        <strong>Rounds:</strong> {fight.rounds}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Record;
