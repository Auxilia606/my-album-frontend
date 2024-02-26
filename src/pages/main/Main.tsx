import { UserStore } from "@store";
import { observer } from "mobx-react";
import { Navigate } from "react-router-dom";

export const Main = observer(() => {
  if (!UserStore.userInfo) {
    return <Navigate to="/login" />;
  } else {
    return <div>Main page</div>;
  }
});
