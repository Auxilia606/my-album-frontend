import { Button, Container, InputSection, Title } from "@components";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserForm } from "./types";

export const Join = () => {
  const { register, handleSubmit } = useForm<UserForm>();

  const onValid: SubmitHandler<UserForm> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <Container className="items-center justify-center gap-4">
        <Title className="text-2xl">회원가입</Title>
        <div className="flex flex-col gap-2">
          <InputSection
            type="email"
            title="이메일 주소"
            placeholder="이메일 주소를 입력해주세요"
            {...register("email", { required: true })}
          />
          <InputSection
            type="text"
            title="닉네임"
            placeholder="닉네임을 입력해주세요"
            {...register("nickname", { required: true })}
          />
          <InputSection
            type="password"
            title="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            {...register("password", { required: true })}
          />
          <InputSection
            type="password"
            title="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요"
            {...register("passwordCheck", { required: true })}
          />
        </div>
        <Button type="submit" className="bg-orange-300 w-60 p-2 font-bold">
          회원가입
        </Button>
      </Container>
    </form>
  );
};
