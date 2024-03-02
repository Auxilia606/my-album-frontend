import { useGetUserLogout } from "@api";
import Logout from "@resources/images/logout.svg";
import PhotoUpload from "@resources/images/photo-upload.svg";
import { DialogStore, UserStore } from "@store";
import { observer } from "mobx-react";
import { Button } from "../button";
import { Title } from "../title";

export const Header = observer(() => {
  const { mutateAsync } = useGetUserLogout();

  return (
    <header className="flex flex-row justify-between items-center px-4 gap-1 text-white border-b">
      <Title className="flex-1">
        환영합니다! {UserStore.userInfo?.nickname}님
      </Title>
      <Button
        className="text-xs p-2"
        onClick={() => {
          DialogStore.openUpload();
        }}
      >
        <img className="w-6 h-6 fill-white" alt="upload" src={PhotoUpload} />
      </Button>
      <Button
        className="text-xs"
        onClick={async () => {
          await mutateAsync();
          UserStore.logout();
        }}
      >
        <img className="w-6 h-6" alt="logout" src={Logout} />
      </Button>
    </header>
  );
});
