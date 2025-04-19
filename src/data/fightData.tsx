export interface Fight {
  id: number;
  record: string;
  opponent: string;
  result: string;
  date: string; // Format: dd-mm-yyyy
  weight: string;
  venue: string;
  method: string;
  rounds: string;
}

// Calculate the weight for the new fight (same as fight ID 1)
const weightForNewFight = `${(104.25 * 0.453592).toFixed(2)} kg`; // 47.29 kg

// Define the list of fights, adding the new one at the beginning (most recent)
export const fights: Fight[] = [
  {
    id: 0,
    record: "8-1-0",
    opponent: "Daniel Anderson",
    result: "W",
    date: "04-04-2025",
    weight: weightForNewFight,
    venue: "The Melbourne Pavilion, Flemington",
    method: "Majority Decision",
    rounds: "10/10",
  },
  {
    id: 1,
    record: "7-1-0",
    opponent: "Katsunari Takayama",
    result: "L",
    date: "18-12-2024",
    weight: weightForNewFight,
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
    weight: `${(102.5 * 0.453592).toFixed(2)} kg`, // 46.50 kg
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
    weight: `${(102.5 * 0.453592).toFixed(2)} kg`, // 46.50 kg
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
    weight: `${(105.5 * 0.453592).toFixed(2)} kg`, // 47.85 kg
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
    weight: `${(103.75 * 0.453592).toFixed(2)} kg`, // 47.06 kg
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
    weight: `${(108.75 * 0.453592).toFixed(2)} kg`, // 49.33 kg
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
    weight: `${(111.5 * 0.453592).toFixed(2)} kg`, // 50.58 kg
    venue: "The Melbourne Pavilion, Flemington",
    method: "Majority Decision",
    rounds: "4/4",
  },
];
