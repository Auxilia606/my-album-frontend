import React from "react";
import { Title } from "../title";
import { InputSectionProps } from "./types";

export const InputSection: React.FC<InputSectionProps> = React.forwardRef<
  HTMLInputElement,
  InputSectionProps
>((props, ref) => {
  const { title, ...inputProps } = props;

  return (
    <div className="flex flex-col gap-1">
      <Title className="text-sm font-normal self-start">{title}</Title>
      <input
        className="bg-white rounded-md w-60 px-2 py-1 text-sm"
        {...inputProps}
        ref={ref}
      />
    </div>
  );
});
