import { ImageProps } from "./types";

export const Image: React.FC<ImageProps> = (props) => {
  const { alt } = props;

  return <img {...{ ...props, alt }}></img>;
};
