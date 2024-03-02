import { DialogStore } from "@store";
import { observer } from "mobx-react";
import { DialogHeader } from "./DialogHeader";

export const Image = observer(() => {
  return (
    <div className="max-w-[80%] max-h-[90%] flex flex-col gap-2 bg-black border border-white rounded-lg p-4">
      <DialogHeader title="사진" />
      <img className="flex-1 object-contain" src={DialogStore.imgsrc} alt="" />
    </div>
  );
});
