import { UserDTO } from "@types";
import { defaultApi } from "../invoke";

export const getTest = async () => {
  const { data } = await defaultApi.get<UserDTO>("/user");

  return data;
};
