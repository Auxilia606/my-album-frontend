import { Button, Container, Image, Title, VerticalDivider } from "@components";
import Logo from "@resources/images/logo200.png";
import { UserStore } from "@store";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const onLogin = useCallback(() => {
    UserStore.login({
      email: "dudxor606@naver.com",
      nickname: "auxilia",
      token: "mytoken",
    });
    navigate("/");
  }, [navigate]);

  const onJoin = useCallback(() => {
    navigate("/join");
  }, [navigate]);

  const onAbout = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <Container className="items-center justify-center gap-4">
      <Image src={Logo} className="w-20 h-20" />
      <Title className="text-black text-2xl">앨범 공유하기</Title>
      <input
        className="bg-cyan-50 rounded-md w-60 p-2 text-sm"
        type="email"
        placeholder="이메일 주소를 입력해주세요"
      />
      <input
        className="bg-cyan-50 rounded-md w-60 p-2 text-sm"
        type="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <Button
        className="bg-cyan-400 w-60 p-2 font-bold text-cyan-900"
        onClick={onLogin}
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
  );
};
