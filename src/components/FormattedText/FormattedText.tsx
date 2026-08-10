// Renders text containing **bold** markers as safe React nodes, without dangerouslySetInnerHTML.
const BOLD_PATTERN = /\*\*(.+?)\*\*/g;

interface FormattedTextProps {
  text: string;
}

const FormattedText = ({ text }: FormattedTextProps) => {
  const parts = text.split(BOLD_PATTERN);

  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? <strong key={index}>{part}</strong> : part
      )}
    </>
  );
};

export default FormattedText;
