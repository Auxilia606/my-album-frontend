import { Button, Title } from "@components";
import Close from "@resources/images/close.svg";
import { DialogStore } from "@store";
import { observer } from "mobx-react";
import { DialogHeaderProps } from "./types";

export const DialogHeader: React.FC<DialogHeaderProps> = observer((props) => {
  const { title } = props;

  return (
    <div className="flex flex-row justify-between mb-2">
      <Title className="text-white">{title}</Title>
      <Button onClick={() => DialogStore.close()}>
        <img className="w-4 h-4" alt="close" src={Close} />
      </Button>
    </div>
  );
});
