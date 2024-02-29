import classNames from "classnames";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      {...{
        ...props,
        className: classNames("rounded-md", props.className),
      }}
    ></button>
  );
};
