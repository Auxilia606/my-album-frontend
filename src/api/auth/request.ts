import { UserDTO, UserEmailDTO, UserNicknameDTO, UserResDTO } from "@types";
import { defaultApi } from "../invoke";

export const postLogin = async (dto: Pick<UserDTO, "email" | "password">) => {
  const { data } = await defaultApi.post<Pick<UserDTO, "email" | "nickname">>(
    "/auth/login",
    dto
  );

  return data;
};

export const postLogout = async () => {
  await defaultApi.post("/auth/logout", { withCredentials: true });
};

export const postUser = async (dto: UserDTO) => {
  const { data } = await defaultApi.post<UserResDTO>("/auth/register", dto);

  return data;
};

export const postCheckEmail = async (dto: UserEmailDTO) => {
  const { data } = await defaultApi.post<UserResDTO>("/auth/check/email", dto);

  return data;
};

export const postCheckNickname = async (dto: UserNicknameDTO) => {
  const { data } = await defaultApi.post<UserResDTO>(
    "/auth/check/nickname",
    dto
  );

  return data;
};
