import classNames from "classnames";
import { ContainerProps } from "./types";

export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div className={classNames("flex flex-col flex-1", props.className)}>
      {props.children}
    </div>
  );
};
