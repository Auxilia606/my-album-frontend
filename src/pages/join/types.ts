import { UserDTO } from "@types";

export type UserForm = UserDTO & {
  passwordCheck: string;
};
