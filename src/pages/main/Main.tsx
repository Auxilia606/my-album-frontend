import { Header, PhotoList } from "@components";
import { UserStore } from "@store";
import { observer } from "mobx-react";
import { Navigate } from "react-router-dom";

export const Main = observer(() => {
  if (!UserStore.userInfo) {
    return <Navigate to="/login" />;
  } else {
    return (
      <main className="flex flex-col flex-1 self-stretch">
        <Header />
        <PhotoList />
      </main>
    );
  }
});
