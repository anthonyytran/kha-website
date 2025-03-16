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
      record: "7-1-0",
      opponent: "Katsunari Takayama",
      result: "L",
      date: "18-12-2024",
      weight: `${(104.25 * 0.453592).toFixed(2)} kg`,
      venue: "Barangay Bula, General Santos City",
      method: "Unanimous Decision",
      rounds: "12/12",
    },
    {
      id: 2,
      record: "7-0-0",
      opponent: "Watcharin Buacharoen",
      result: "W",
      date: "16-03-2024",
      weight: `${(106.5 * 0.453592).toFixed(2)} kg`,
      venue: "The Melbourne Pavilion, Flemington",
      method: "Unanimous Decision",
      rounds: "5/5",
    },
    {
      id: 3,
      record: "6-0-0",
      opponent: "Thoedkiad Weerachon",
      result: "W",
      date: "02-12-2023",
      weight: `${(102.5 * 0.453592).toFixed(2)} kg`,
      venue: "The Melbourne Pavilion, Flemington",
      method: "Technical Knockout",
      rounds: "3/6",
    },
    {
      id: 4,
      record: "5-0-0",
      opponent: "Oatkowit Kamlangcharoey",
      result: "W",
      date: "16-09-2023",
      weight: `${(102.5 * 0.453592).toFixed(2)} kg`,
      venue: "The Melbourne Pavilion, Flemington",
      method: "Technical Knockout",
      rounds: "1/6",
    },
    {
      id: 5,
      record: "4-0-0",
      opponent: "Sirachat Soising",
      result: "W",
      date: "25-03-2023",
      weight: `${(105.5 * 0.453592).toFixed(2)} kg`,
      venue: "The Melbourne Pavilion, Flemington",
      method: "Technical Knockout",
      rounds: "2/4",
    },
    {
      id: 6,
      record: "3-0-0",
      opponent: "Gerttipong Kumsahwat",
      result: "W",
      date: "16-12-2022",
      weight: `${(103.75 * 0.453592).toFixed(2)} kg`,
      venue: "The Melbourne Pavilion, Flemington",
      method: "Unanimous Decision",
      rounds: "6/6",
    },
    {
      id: 7,
      record: "2-0-0",
      opponent: "Gerttipong Kumsahwat",
      result: "W",
      date: "20-08-2022",
      weight: `${(108.75 * 0.453592).toFixed(2)} kg`,
      venue: "The Melbourne Pavilion, Flemington",
      method: "Unanimous Decision",
      rounds: "4/4",
    },
    {
      id: 8,
      record: "1-0-0",
      opponent: "Prakob Nuankaew",
      result: "W",
      date: "19-03-2022",
      weight: `${(111.5 * 0.453592).toFixed(2)} kg`,
      venue: "The Melbourne Pavilion, Flemington",
      method: "Majority Decision",
      rounds: "4/4",
    },
  ];

  // Format date from dd-mm-yyyy to "day month year"
  const formatDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split("-");
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // For mobile, use abbreviated month names
    const isMobile = window.innerWidth <= 480;
    const monthName = isMobile
      ? monthNames[parseInt(month) - 1].substring(0, 3)
      : monthNames[parseInt(month) - 1];

    return `${day} ${monthName} ${year}`;
  };

  const [expandedFightId, setExpandedFightId] = useState<number | null>(null);
  const toggleExpand = (id: number) =>
    setExpandedFightId((prevId) => (prevId === id ? null : id));

  return (
    <div className="record-container">
      <h1>Record</h1>
      <div className="total-record-container">
        <div className="record-grid">
          <div className="record-cell">
            <span className="wins">7</span>
          </div>
          <div className="record-cell">
            <span className="losses">1</span>
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

      <div className="table-wrapper">
        <table className="record-table">
          <thead>
            <tr>
              <th className="result-col">Result</th>
              <th className="date-col">Date</th>
              <th className="record-col">Record</th>
              <th className="opponent-col">Opponent</th>
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
                  <td
                    className="result-col"
                    data-label="Result"
                    data-opponent={fight.opponent}
                  >
                    <div
                      className={`result-box ${
                        fight.result === "W"
                          ? "win"
                          : fight.result === "L"
                          ? "loss"
                          : ""
                      }`}
                    >
                      {fight.result}
                    </div>
                  </td>
                  <td className="date-col" data-label="Date">
                    {formatDate(fight.date)}
                  </td>
                  <td className="record-col" data-label="Record">
                    {fight.record}
                  </td>
                  <td className="opponent-col" data-label="Opponent">
                    {fight.opponent}
                  </td>
                </tr>
                {expandedFightId === fight.id && (
                  <tr className="details-row">
                    <td colSpan={4}>
                      <div className="details-content">
                        <p>
                          <strong>Weight:</strong> {fight.weight}
                        </p>
                        <p>
                          <strong>Method:</strong> {fight.method}
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
    </div>
  );
};

export default Record;
