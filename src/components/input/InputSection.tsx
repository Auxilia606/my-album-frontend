import React from "react";
import { Title } from "../title";
import { Warning } from "../warning";
import { InputSectionProps } from "./types";

export const InputSection: React.FC<InputSectionProps> = React.forwardRef<
  HTMLInputElement,
  InputSectionProps
>((props, ref) => {
  const { title, warning, validation, ...inputProps } = props;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2 items-end">
        <Title className="text-sm font-normal self-start">{title}</Title>
        <Warning text={warning} />
      </div>
      <div className="flex gap-2">
        <input
          className="bg-white rounded-md w-60 px-2 py-1 text-sm"
          {...inputProps}
          ref={ref}
        />
      </div>
    </div>
  );
});
