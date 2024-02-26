import { makeAutoObservable } from "mobx";

type UserInfo = {
  nickname: string;
  email: string;
  token: string;
};

export class UserStore {
  userInfo?: UserInfo = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  login(userInfo: UserInfo) {
    this.userInfo = userInfo;
  }

  logout() {
    this.userInfo = undefined;
  }
}

const userStore = new UserStore();

export default userStore;
