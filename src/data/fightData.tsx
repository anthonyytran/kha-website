export interface Fight {
  id: number;
  record: string; // Kha Lu's professional record after this fight (W-L-D)
  opponent: string;
  result: "W" | "L" | "D";
  date: string; // Format: "Month YYYY"
  weight: string;
  venue: string;
  rounds?: string; // e.g. "10/10" — omitted where not confirmed
  title?: string; // Title on the line, if any
}

// Source: BoxRec (boxrec.com/en/box-pro/1048076)
export const fights: Fight[] = [
  {
    id: 12,
    record: "9-3-0",
    opponent: "Renden Oppas",
    result: "L",
    date: "April 2026",
    weight: "Minimumweight",
    venue: "The Melbourne Pavilion, Flemington, VIC",
    rounds: "8/8",
  },
  {
    id: 11,
    record: "9-2-0",
    opponent: "Ratiphong Khamthao",
    result: "W",
    date: "December 2025",
    weight: "Minimumweight",
    venue: "The Melbourne Pavilion, Flemington, VIC",
    title: "Vacant Australian Minimumweight Title",
  },
  {
    id: 10,
    record: "8-2-0",
    opponent: "Simon Za Thang",
    result: "L",
    date: "August 2025",
    weight: "Minimumweight",
    venue: "The Melbourne Pavilion, Flemington, VIC",
    title: "Australian Light Flyweight Title",
  },
  {
    id: 9,
    record: "8-1-0",
    opponent: "Daniel Anderson",
    result: "W",
    date: "April 2025",
    weight: `${(104.25 * 0.453592).toFixed(2)} kg`,
    venue: "The Melbourne Pavilion, Flemington, VIC",
    rounds: "10/10",
    title: "Vacant Australian Light Flyweight Title",
  },
  {
    id: 8,
    record: "7-1-0",
    opponent: "Katsunari Takayama",
    result: "L",
    date: "December 2024",
    weight: `${(104.25 * 0.453592).toFixed(2)} kg`,
    venue: "Barangay Bula, General Santos City",
    rounds: "12/12",
    title: "IBO World Minimumweight Title",
  },
  {
    id: 7,
    record: "7-0-0",
    opponent: "Watcharin Buacharoen",
    result: "W",
    date: "March 2024",
    weight: `${(106.5 * 0.453592).toFixed(2)} kg`,
    venue: "The Melbourne Pavilion, Flemington, VIC",
    rounds: "5/5",
  },
  {
    id: 6,
    record: "6-0-0",
    opponent: "Thoedkiad Weerachon",
    result: "W",
    date: "December 2023",
    weight: `${(102.5 * 0.453592).toFixed(2)} kg`,
    venue: "The Melbourne Pavilion, Flemington, VIC",
    rounds: "3/6",
  },
  {
    id: 5,
    record: "5-0-0",
    opponent: "Oatkowit Kamlangcharoey",
    result: "W",
    date: "September 2023",
    weight: `${(102.5 * 0.453592).toFixed(2)} kg`,
    venue: "The Melbourne Pavilion, Flemington, VIC",
    rounds: "1/6",
  },
  {
    id: 4,
    record: "4-0-0",
    opponent: "Sirachat Soising",
    result: "W",
    date: "March 2023",
    weight: `${(105.5 * 0.453592).toFixed(2)} kg`,
    venue: "The Melbourne Pavilion, Flemington, VIC",
    rounds: "2/4",
  },
  {
    id: 3,
    record: "3-0-0",
    opponent: "Gerttipong Kumsahwat",
    result: "W",
    date: "December 2022",
    weight: `${(103.75 * 0.453592).toFixed(2)} kg`,
    venue: "The Melbourne Pavilion, Flemington, VIC",
    rounds: "6/6",
  },
  {
    id: 2,
    record: "2-0-0",
    opponent: "Gerttipong Kumsahwat",
    result: "W",
    date: "August 2022",
    weight: `${(108.75 * 0.453592).toFixed(2)} kg`,
    venue: "The Melbourne Pavilion, Flemington, VIC",
    rounds: "4/4",
  },
  {
    id: 1,
    record: "1-0-0",
    opponent: "Prakob Nuankaew",
    result: "W",
    date: "March 2022",
    weight: `${(111.5 * 0.453592).toFixed(2)} kg`,
    venue: "The Melbourne Pavilion, Flemington, VIC",
    rounds: "4/4",
  },
];
