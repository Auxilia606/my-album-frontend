import { usePostUserLogin } from "@api";
import { Button, Container, Image, Title, VerticalDivider } from "@components";
import Logo from "@resources/images/logo200.png";
import { UserStore } from "@store";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserForm } from "../join/types";

export const Login = () => {
  const { handleSubmit, register } =
    useForm<Pick<UserForm, "email" | "password">>();
  const navigate = useNavigate();
  const { mutateAsync } = usePostUserLogin();

  const onLogin: SubmitHandler<Pick<UserForm, "email" | "password">> =
    useCallback(
      async (data) => {
        const res = await mutateAsync(data);
        UserStore.login({
          ...res,
        });
        navigate("/");
      },
      [mutateAsync, navigate]
    );

  const onJoin = useCallback(() => {
    navigate("/join");
  }, [navigate]);

  const onAbout = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <Container className="items-center justify-center gap-4 p-8 rounded-2xl bg-green-200">
        <Image src={Logo} className="w-20 h-20" />
        <Title className="text-black text-2xl">앨범 공유하기</Title>
        <input
          className="bg-lime-50 rounded-md w-60 p-2 text-sm"
          type="email"
          placeholder="이메일 주소를 입력해주세요"
          {...register("email")}
        />
        <input
          className="bg-lime-50 rounded-md w-60 p-2 text-sm"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register("password")}
        />
        <Button
          className="bg-teal-600 w-60 p-2 font-bold text-gray-100"
          type="submit"
        >
          로그인
        </Button>
        <div className="flex flex-row gap-3">
          <Button className="font-normal text-sm" onClick={onJoin}>
            회원가입
          </Button>
          <VerticalDivider />
          <Button className="font-normal text-sm" onClick={onAbout}>
            About
          </Button>
        </div>
        {/* <Divider className="self-stretch mx-2" text="또는" />
      <button
        className="bg-cyan-400 rounded-md w-60 p-2 text-center font-bold text-cyan-900"
        type="submit"
      >
        카카오톡 로그인
      </button> */}
      </Container>
    </form>
  );
};
