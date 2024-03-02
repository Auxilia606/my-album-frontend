import { DialogStore } from "@store";
import classNames from "classnames";
import { observer } from "mobx-react";
import { Image, Upload } from "./contents";

export const Dialog = observer(() => {
  return (
    <div
      className={classNames(
        "absolute w-full h-full flex justify-center items-center bg-[#000a]",
        {
          hidden: !DialogStore.opened,
        }
      )}
    >
      {DialogStore.type === "upload" && DialogStore.opened && <Upload />}
      {DialogStore.type === "image" && DialogStore.opened && <Image />}
    </div>
  );
});
