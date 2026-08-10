import { AboutStat } from "../types";

interface StatsListProps {
  stats: AboutStat[];
}

const StatsList = ({ stats }: StatsListProps) => (
  <div className="stats-container">
    <ul className="stats-list">
      {stats.map((stat) => (
        <li key={stat.label}>
          <span className="stat-label">{stat.label}</span>
          <span className="stat-value">{stat.value}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default StatsList;
