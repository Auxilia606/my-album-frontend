import { useMutation, useQuery } from "@tanstack/react-query";
import { UserDTO, UserEmailDTO, UserNicknameDTO } from "@types";
import {
  getUserPhotos,
  postCheckEmail,
  postCheckNickname,
  postLogin,
  postLogout,
  postUser,
} from "./request";

export const usePostUserLogin = () => {
  return useMutation({
    mutationFn: async (dto: Pick<UserDTO, "email" | "password">) => {
      const data = await postLogin(dto);

      return data;
    },
  });
};

export const useGetUserLogout = () => {
  return useMutation({
    mutationFn: () => postLogout(),
  });
};

export const usePostUserMutation = () => {
  return useMutation({ mutationFn: (dto: UserDTO) => postUser(dto) });
};

export const usePostCheckEmailMutation = () => {
  return useMutation({
    mutationFn: (dto: UserEmailDTO) => postCheckEmail(dto),
  });
};

export const usePostCheckNicknameMutation = () => {
  return useMutation({
    mutationFn: (dto: UserNicknameDTO) => postCheckNickname(dto),
  });
};

export const useGetUserPhotos = () => {
  return useQuery({
    queryKey: ["auth", "photos"],
    queryFn: () => getUserPhotos(),
  });
};
