import classNames from "classnames";
import { DividerProps } from "./types";

export const Divider: React.FC<DividerProps> = (props) => {
  const { text } = props;

  return (
    <div
      {...props}
      className={classNames("flex flex-row items-center", props.className)}
    >
      <div className="bg-slate-300 h-[1px] flex-1" />
      {text && <span className="mx-2">{text}</span>}
      <div className="bg-slate-300 h-[1px] flex-1" />
    </div>
  );
};
