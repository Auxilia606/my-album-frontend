export type InputSectionProps = {
  title: string;
  validation?: (value?: string) => boolean | Promise<boolean>;
  warning?: string;
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
