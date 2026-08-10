import { Trophy } from "lucide-react";
import FormattedText from "../../../components/FormattedText/FormattedText";

interface AccomplishmentsListProps {
  items: string[];
}

const AccomplishmentsList = ({ items }: AccomplishmentsListProps) => (
  <ul className="accomplishments-list">
    {items.map((item) => (
      <li key={item}>
        <Trophy className="accomplishment-icon" size={20} aria-hidden="true" />
        <FormattedText text={item} />
      </li>
    ))}
  </ul>
);

export default AccomplishmentsList;
