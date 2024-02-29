import { useMutation, useQuery } from "@tanstack/react-query";
import { UserDTO, UserEmailDTO, UserNicknameDTO } from "@types";
import {
  getLogout,
  postCheckEmail,
  postCheckNickname,
  postLogin,
  postUser,
} from "./request";

export const usePostUserLogin = () => {
  return useMutation({
    mutationFn: (dto: Pick<UserDTO, "email" | "password">) => postLogin(dto),
  });
};

export const useGetUserLogout = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: () => getLogout(),
    enabled: false,
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
