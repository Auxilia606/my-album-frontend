import { usePostCheckEmailMutation, usePostCheckNicknameMutation } from "@api";
import { useCallback } from "react";
import { UserForm } from "../types";

export const useValidation = () => {
  const { mutateAsync: mutateCheckEmail } = usePostCheckEmailMutation();
  const { mutateAsync: mutateCheckNickname } = usePostCheckNicknameMutation();

  const validateEmail = useCallback(
    async (email: string) => {
      if (!email) return false;

      const { exists } = await mutateCheckEmail({ email });

      return exists ? "중복된 이메일 주소입니다" : true;
    },
    [mutateCheckEmail]
  );

  const validateNickname = useCallback(
    async (nickname: string) => {
      if (!nickname) return false;

      const { exists } = await mutateCheckNickname({ nickname });

      return exists ? "중복된 닉네임입니다" : true;
    },
    [mutateCheckNickname]
  );

  const validatePassword = useCallback((password: string) => {
    return !!password.match(/(?=.*\d)(?=.*[a-z]).{8,}/)
      ? true
      : "영소문자, 특수문자 포함 8자리 이상";
  }, []);

  const validatePasswordCheck = useCallback(
    (passwordCheck: string, formValues: UserForm) => {
      return formValues.password === passwordCheck
        ? true
        : "동일한 비밀번호를 입력해주세요";
    },
    []
  );

  return {
    validateEmail,
    validateNickname,
    validatePassword,
    validatePasswordCheck,
  };
};
