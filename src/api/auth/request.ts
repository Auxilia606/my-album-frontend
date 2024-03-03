import { UserStore } from "@store";
import {
  UserDTO,
  UserEmailDTO,
  UserNicknameDTO,
  UserPhotoResDTO,
  UserResDTO,
} from "@types";
import { defaultApi } from "../invoke";

export const postLogin = async (dto: Pick<UserDTO, "email" | "password">) => {
  const { data } = await defaultApi.post<
    Pick<UserDTO, "email" | "nickname"> & { token: string }
  >("/auth/login", dto);

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

export const getUserPhotos = async () => {
  const { data } = await defaultApi.get<UserPhotoResDTO>("/auth/photos", {
    headers: {
      Authorization: UserStore.token,
    },
  });

  return data;
};

export const postCheckNickname = async (dto: UserNicknameDTO) => {
  const { data } = await defaultApi.post<UserResDTO>(
    "/auth/check/nickname",
    dto
  );

  return data;
};
