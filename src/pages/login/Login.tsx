import { Container, Divider, Image, Title } from "@components";
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

  return (
    <Container className="bg-purple-100 h-full items-center justify-center gap-4">
      <Image src={Logo} className="w-20 h-20" />
      <Title className="text-purple-900">앨범 공유하기</Title>
      <input
        className="bg-cyan-50 rounded-md w-60 p-2"
        type="email"
        placeholder="이메일 주소를 입력해주세요"
      />
      <input
        className="bg-cyan-50 rounded-md w-60 p-2"
        type="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <button
        className="bg-cyan-400 rounded-md w-60 p-2 text-center font-bold text-cyan-900"
        type="submit"
        onClick={onLogin}
      >
        로그인
      </button>
      <div>
        <button onClick={onJoin}>회원가입</button>
      </div>
      <Divider className="self-stretch mx-2" text="또는" />
      <button
        className="bg-cyan-400 rounded-md w-60 p-2 text-center font-bold text-cyan-900"
        type="submit"
      >
        카카오톡 로그인
      </button>
    </Container>
  );
};
