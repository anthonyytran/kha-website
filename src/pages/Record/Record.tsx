import React, { useState } from "react";
import "./Record.css";

interface Fight {
  id: number;
  opponent: string;
  result: string;
  date: string;
  weight: string;
  venue: string;
  method: string;
  rounds: string;
  additionalInfo: string;
}

const Record: React.FC = () => {
  const fights: Fight[] = [
    {
      id: 1,
      opponent: "Watcharin Buacharoen",
      result: "W",
      date: "2024-03-16",
      weight: "106½ lbs",
      venue: "The Melbourne Pavilion, Flemington",
      method: "W-UD",
      rounds: "5/5",
      additionalInfo:
        "Ref: Malcolm Bulner | Judges: Andrew Bartlett 50-45, Lynne Kennedy 49-46, Brett Manton 49-46",
    },
    {
      id: 2,
      opponent: "Thoedkiad Weerachon",
      result: "W",
      date: "2023-12-02",
      weight: "102½ lbs",
      venue: "The Melbourne Pavilion, Flemington",
      method: "W-TKO",
      rounds: "3/6",
      additionalInfo:
        "Ref: Anthony Hibbs | Judges: Andrew Bartlett 20-18, Andrew Campbell 20-18, Matthew Thynne 20-18",
    },
    {
      id: 3,
      opponent: "Oatkowit Kamlangcharoey",
      result: "W",
      date: "2023-09-16",
      weight: "102½ lbs",
      venue: "The Melbourne Pavilion, Flemington",
      method: "W-TKO",
      rounds: "1/6",
      additionalInfo:
        "Ref: Anthony Hibbs | Judges: Samantha Bulner, Andrew Campbell, Martin O'Malley",
    },
    {
      id: 4,
      opponent: "Sirachat Soising",
      result: "W",
      date: "2023-03-25",
      weight: "105½ lbs",
      venue: "The Melbourne Pavilion, Flemington",
      method: "W-TKO",
      rounds: "2/4",
      additionalInfo:
        "Ref: Malcolm Bulner | Judges: Peter Hansen 10-9, Anthony Hibbs 10-9, Brett Manton 10-9",
    },
    {
      id: 5,
      opponent: "Gerttipong Kumsahwat",
      result: "W",
      date: "2022-12-16",
      weight: "103¾ lbs",
      venue: "The Melbourne Pavilion, Flemington",
      method: "W-UD",
      rounds: "6/6",
      additionalInfo:
        "Ref: Malcolm Bulner | Judges: Peter Hansen 60-54, Brett Manton 60-54, Damian Membrey 60-54",
    },
    {
      id: 6,
      opponent: "Gerttipong Kumsahwat",
      result: "W",
      date: "2022-08-20",
      weight: "108¾ lbs",
      venue: "The Melbourne Pavilion, Flemington",
      method: "W-UD",
      rounds: "4/4",
      additionalInfo:
        "Ref: Ignatius Missailidis | Judges: Andrew Campbell 40-36, Martin O'Malley 40-36, Andrew Bartlett 40-36",
    },
    {
      id: 7,
      opponent: "Prakob Nuankaew",
      result: "W",
      date: "2022-03-19",
      weight: "111½ lbs",
      venue: "The Melbourne Pavilion, Flemington",
      method: "W-MD",
      rounds: "4/4",
      additionalInfo:
        "Ref: Anthony Hibbs | Judges: Andrew Bartlett 38-37, Lynne Kennedy 38-37, Paul Le 38-38",
    },
  ];

  const [expandedFightId, setExpandedFightId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedFightId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="record-container">
      <h1>My Record</h1>
      <table className="record-table">
        <thead>
          <tr>
            <th className="result-col"></th>
            <th>Opponent</th>
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
                <td className="opponent-col">{fight.opponent}</td>
              </tr>
              {expandedFightId === fight.id && (
                <tr className="details-row">
                  <td colSpan={2}>
                    <div className="details-content">
                      <p>
                        <strong>Date:</strong> {fight.date}
                      </p>
                      <p>
                        <strong>Weight:</strong> {fight.weight}
                      </p>
                      <p>
                        <strong>Venue:</strong> {fight.venue}
                      </p>
                      <p>
                        <strong>Method:</strong> {fight.method}
                      </p>
                      <p>
                        <strong>Rounds:</strong> {fight.rounds}
                      </p>
                      <p>
                        <strong>Additional Info:</strong> {fight.additionalInfo}
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
