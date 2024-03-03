import { makeAutoObservable } from "mobx";

type UserInfo = {
  nickname: string;
  email: string;
};

export class UserStore {
  userInfo?: UserInfo = undefined;
  token?: string;

  constructor() {
    makeAutoObservable(this);
  }

  login(userInfo: UserInfo, token: string) {
    this.userInfo = userInfo;
    this.updateToken(token);
  }

  logout() {
    this.userInfo = undefined;
  }

  updateToken(token: string) {
    this.token = token;
  }

  clearToken() {
    this.token = undefined;
  }
}

const userStore = new UserStore();

export default userStore;
