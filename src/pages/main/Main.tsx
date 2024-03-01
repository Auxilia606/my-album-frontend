import { useGetUserLogout } from "@api";
import { UserStore } from "@store";
import { observer } from "mobx-react";
import { Navigate } from "react-router-dom";

export const Main = observer(() => {
  const { mutateAsync } = useGetUserLogout();
  if (!UserStore.userInfo) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        Main page 안녕하세요! {UserStore.userInfo.nickname}
        <button
          onClick={async () => {
            await mutateAsync();
            UserStore.logout();
          }}
        >
          logout
        </button>
      </div>
    );
  }
});
