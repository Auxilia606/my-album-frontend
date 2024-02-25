import { Divider, Image, Title } from "@components";
import Logo from "@resources/images/logo200.png";

export const Login = () => {
  return (
    <div className="flex flex-col flex-1 bg-purple-100 h-full items-center justify-center gap-4">
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
      >
        로그인
      </button>
      <Divider className="self-stretch mx-2" text="또는" />
      <button
        className="bg-cyan-400 rounded-md w-60 p-2 text-center font-bold text-cyan-900"
        type="submit"
      >
        카카오톡 로그인
      </button>
    </div>
  );
};
