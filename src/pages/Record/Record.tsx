import React, { useState } from "react";
import "./Record.css";
// Import the data and interface from the separate file
import { fights } from "../../data/fightData.tsx";

const Record: React.FC = () => {
  // Format date from dd-mm-yyyy to "day month year"
  const formatDate = (dateStr: string) => {
    // Add a check in case dateStr is undefined or not in the expected format
    if (!dateStr || !dateStr.includes("-")) {
      console.warn("Invalid date format received:", dateStr);
      return "Invalid Date"; // Or handle appropriately
    }
    const parts = dateStr.split("-");
    if (parts.length !== 3) {
      console.warn("Invalid date format received:", dateStr);
      return "Invalid Date"; // Or handle appropriately
    }
    const [day, month, year] = parts;
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

    // Ensure month is a valid number between 1 and 12
    const monthIndex = parseInt(month, 10) - 1;
    if (isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) {
      console.warn("Invalid month in date:", dateStr);
      return "Invalid Date";
    }

    // For mobile, use abbreviated month names
    // Note: window.innerWidth might not be reliable during SSR or initial render.
    // Consider using a hook like useMediaQuery for better responsiveness.
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 480;
    const monthName = isMobile
      ? monthNames[monthIndex].substring(0, 3)
      : monthNames[monthIndex];

    return `${day} ${monthName} ${year}`;
  };

  const [expandedFightId, setExpandedFightId] = useState<number | null>(null);
  const toggleExpand = (id: number) =>
    setExpandedFightId((prevId) => (prevId === id ? null : id));

  return (
    <div className="record-container">
      <h1>Record</h1>
      {/* Update the total record display */}
      <div className="total-record-container">
        <div className="record-grid">
          <div className="record-cell">
            <span className="wins">8</span> {/* Updated Wins */}
          </div>
          <div className="record-cell">
            <span className="losses">1</span> {/* Updated Losses */}
          </div>
          <div className="record-cell">
            <span className="draws">0</span> {/* Updated Draws */}
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
            {/* Use the imported 'fights' array */}
            {fights.map((fight) => (
              <React.Fragment key={fight.id}>
                <tr
                  className={`record-row ${
                    expandedFightId === fight.id ? "expanded-row" : ""
                  }`}
                  onClick={() => toggleExpand(fight.id)}
                  // Adding aria attributes for better accessibility
                  aria-expanded={expandedFightId === fight.id}
                  aria-controls={`details-${fight.id}`}
                  tabIndex={0} // Make row focusable
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      toggleExpand(fight.id);
                  }} // Allow keyboard interaction
                >
                  <td className="result-col" data-label="Result">
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
                  <tr className="details-row" id={`details-${fight.id}`}>
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
