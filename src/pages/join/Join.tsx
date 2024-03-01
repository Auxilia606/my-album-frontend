import { usePostUserMutation } from "@api";
import { Button, Container, InputSection, Title } from "@components";
import { useCallback, useState } from "react";
import {
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useValidation } from "./hooks";
import { UserForm } from "./types";

export const Join = () => {
  const { handleSubmit, register } = useForm<UserForm>();
  const { mutate } = usePostUserMutation();
  const [errors, setErrors] = useState<FieldErrors<UserForm>>();
  const onValid: SubmitHandler<UserForm> = useCallback(
    (data) => {
      mutate(data);
    },
    [mutate]
  );
  const onInvalid: SubmitErrorHandler<UserForm> = useCallback((errors) => {
    setErrors(errors);
  }, []);

  const {
    validateEmail,
    validateNickname,
    validatePassword,
    validatePasswordCheck,
  } = useValidation();

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <Container className="items-center justify-center gap-6">
        <Title className="text-2xl">회원가입</Title>
        <div className="flex flex-col gap-2">
          <InputSection
            type="email"
            title="이메일 주소"
            placeholder="이메일 주소를 입력해주세요"
            warning={errors?.email?.message}
            {...register("email", {
              required: "이메일 주소를 입력해주세요",
              validate: validateEmail,
            })}
            onChange={undefined}
          />
          <InputSection
            type="text"
            title="닉네임"
            placeholder="닉네임을 입력해주세요"
            warning={errors?.nickname?.message}
            {...register("nickname", {
              required: "닉네임을 입력해주세요",
              validate: validateNickname,
            })}
            onChange={undefined}
          />
          <InputSection
            type="password"
            title="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            warning={errors?.password?.message}
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              validate: validatePassword,
            })}
          />
          <InputSection
            type="password"
            title="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요"
            warning={errors?.passwordCheck?.message}
            {...register("passwordCheck", {
              required: "비밀번호를 입력해주세요",
              validate: validatePasswordCheck,
            })}
          />
        </div>
        <Button type="submit" className="bg-orange-300 w-60 p-2 font-bold">
          회원가입
        </Button>
      </Container>
    </form>
  );
};
