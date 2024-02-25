import classNames from "classnames";
import { TitleProps } from "./types";

export const Title: React.FC<TitleProps> = (props) => {
  return (
    <label
      {...props}
      className={classNames(props.className, "font-bold text-xl")}
    ></label>
  );
};
