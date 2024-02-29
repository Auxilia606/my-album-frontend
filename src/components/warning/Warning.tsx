import { WarningProps } from "./types";

export const Warning: React.FC<WarningProps> = (props) => {
  const { text } = props;

  if (!text) return null;

  return <span className="text-xs text-red-500">{text}</span>;
};
