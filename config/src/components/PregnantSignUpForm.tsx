'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export const PregnantSignUpForm = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fff3ba]">
      <div className="w-96 h-[874px] relative bg-[#fff3ba] overflow-hidden">
        {/* 메인 컨테이너 */}
        <div className="w-80 h-[774px] left-[28px] top-[57px] absolute bg-white rounded-3xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        
        {/* 로고 섹션 - 구름 효과 */}
        <div className="w-32 h-16 left-[141px] top-[78px] absolute bg-white rounded-full blur-[2px]" />
        <div className="w-24 h-16 left-[219px] top-[89px] absolute bg-white rounded-full blur-[2px]" />
        <div className="w-24 h-16 left-[120px] top-[70px] absolute bg-white rounded-full blur-[2px]" />
        <div className="w-24 h-16 left-[183px] top-[70px] absolute bg-white rounded-full blur-[2px]" />
        <div className="w-24 h-16 left-[194px] top-[108px] absolute bg-white rounded-full blur-[2px]" />
        <div className="w-20 h-16 left-[87px] top-[89px] absolute bg-white rounded-full blur-[2px]" />
        <div className="w-20 h-16 left-[154px] top-[113px] absolute bg-white rounded-full blur-[2px]" />
        <div className="w-20 h-16 left-[102px] top-[108px] absolute bg-white rounded-full blur-[2px]" />
        
        {/* 로고 이미지 */}
        <div className="w-32 h-14 left-[141px] top-[91px] absolute">
          <Image
            className="w-full h-full object-contain"
            alt="Logo"
            src="/images/logo/시작 - 로고.png"
            width={134}
            height={55}
            priority
          />
        </div>

        {/* 아이디 입력 섹션 */}
        <div className="w-20 h-9 left-[32px] top-[161px] absolute text-center justify-start text-black/70 text-sm font-normal font-['Do_Hyeon'] leading-[50px]">아이디</div>
        <div className="w-72 h-8 left-[51px] top-[196px] absolute bg-white rounded-[10px] border border-zinc-300" />
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          className="w-72 h-8 left-[51px] top-[196px] absolute text-center text-neutral-400 text-xs font-normal font-['Do_Hyeon'] leading-[50px]"
        />
        <div data-property-1="Default" className="w-16 h-9 left-[281px] top-[188px] absolute">
          <div className="w-16 h-6 left-0 top-[13px] absolute bg-yellow-200 rounded-[10px]" />
          <div className="w-14 h-3.5 left-[4px] top-0 absolute text-center justify-start text-black text-xs font-normal font-['Do_Hyeon'] leading-[50px]">중복확인</div>
        </div>

        {/* 이름 입력 섹션 */}
        <div className="w-12 h-9 left-[45px] top-[230px] absolute text-center justify-start text-black/70 text-sm font-normal font-['Do_Hyeon'] leading-[50px]">이름</div>
        <div className="w-72 h-8 left-[52px] top-[265px] absolute bg-white rounded-[10px] border border-zinc-300" />
        <input
          type="text"
          placeholder="이름을 입력하세요"
          className="w-72 h-8 left-[52px] top-[265px] absolute text-center text-neutral-400 text-xs font-normal font-['Do_Hyeon'] leading-[50px]"
        />

        {/* 이메일 입력 섹션 */}
        <div className="w-12 h-9 left-[49px] top-[299px] absolute text-center justify-start text-black/70 text-sm font-normal font-['Do_Hyeon'] leading-[50px]">이메일</div>
        <div className="w-72 h-8 left-[52px] top-[334px] absolute bg-white rounded-[10px] border border-zinc-300" />
        <input
          type="email"
          placeholder="이메일을 입력하세요"
          className="w-72 h-8 left-[52px] top-[334px] absolute text-center text-neutral-400 text-xs font-normal font-['Do_Hyeon'] leading-[50px]"
        />
        <div className="w-16 h-6 left-[282px] top-[338px] absolute bg-yellow-200 rounded-[10px]" />
        <div className="w-14 h-3.5 left-[286px] top-[326px] absolute text-center justify-start text-black text-xs font-normal font-['Do_Hyeon'] leading-[50px]">인증요청</div>

        {/* 전화번호 입력 섹션 */}
        <div className="w-20 h-9 left-[38px] top-[368px] absolute text-center justify-start text-black/70 text-sm font-normal font-['Do_Hyeon'] leading-[50px]">전화번호</div>
        <div className="w-72 h-8 left-[52px] top-[409px] absolute bg-white rounded-[10px] border border-zinc-300" />
        <div className="w-72 h-5 left-[19px] top-[401px] absolute text-center justify-start text-neutral-400 text-xs font-normal font-['Do_Hyeon'] leading-[50px]">휴대폰 번호는 '-'없이 숫자만 입력하셔도 됩니다</div>
        <input
          type="tel"
          className="w-72 h-8 left-[52px] top-[409px] absolute bg-white rounded-[10px] border border-zinc-300"
        />
        <div data-property-1="Default" className="w-16 h-9 left-[281px] top-[401px] absolute">
          <div className="w-16 h-6 left-0 top-[13px] absolute bg-yellow-200 rounded-[10px]" />
          <div className="w-14 h-3.5 left-[4px] top-0 absolute text-center justify-start text-black text-xs font-normal font-['Do_Hyeon'] leading-[50px]">중복확인</div>
        </div>

        {/* 비밀번호 입력 섹션 */}
        <div className="w-32 h-9 left-[15px] top-[443px] absolute text-center justify-start text-black/70 text-sm font-normal font-['Do_Hyeon'] leading-[50px]">비밀번호</div>
        <div className="w-72 h-8 left-[52px] top-[481px] absolute bg-white rounded-[10px] border border-zinc-300" />
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          className="w-72 h-8 left-[52px] top-[481px] absolute text-center text-neutral-400 text-xs font-normal font-['Do_Hyeon'] leading-[50px]"
        />

        {/* 비밀번호 확인 섹션 */}
        <div className="w-32 h-9 left-[28px] top-[525px] absolute text-center justify-start text-black/70 text-sm font-normal font-['Do_Hyeon'] leading-[50px]">비밀번호 확인</div>
        <div className="w-72 h-8 left-[52px] top-[563px] absolute bg-white rounded-[10px] border border-zinc-300" />
        <input
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          className="w-72 h-8 left-[52px] top-[563px] absolute text-center text-neutral-400 text-xs font-normal font-['Do_Hyeon'] leading-[50px]"
        />

        {/* 주소 입력 섹션 */}
        <div className="w-20 h-9 left-[31px] top-[600px] absolute text-center justify-start text-black/70 text-sm font-normal font-['Do_Hyeon'] leading-[50px]">주소</div>
        <div className="w-72 h-8 left-[52px] top-[637px] absolute bg-white rounded-[10px] border border-zinc-300" />
        <div className="w-56 h-6 left-[41px] top-[629px] absolute text-center justify-start text-neutral-400 text-sm font-normal font-['Do_Hyeon'] leading-[50px]">검색 버튼을 눌러 주소를 입력해주세요</div>
        <div data-property-1="Default" className="w-16 h-9 left-[281px] top-[637px] absolute">
          <div className="w-16 h-6 left-0 top-[13px] absolute bg-yellow-200 rounded-[10px]" />
          <div className="w-14 h-3.5 left-[4px] top-0 absolute text-center justify-start text-black text-xs font-normal font-['Do_Hyeon'] leading-[50px]">검색</div>
        </div>

        {/* 회원가입 버튼 섹션 */}
        <div className="w-72 h-10 left-[49px] top-[702.18px] absolute bg-yellow-200 rounded-[20px]" />
        <button className="w-52 h-7 left-[99.02px] top-[700px] absolute text-center justify-start text-black text-base font-normal font-['Do_Hyeon'] leading-[50px]">
          회원가입
        </button>

        {/* 로그인 링크 섹션 */}
        <div className="w-60 h-9 left-[79px] top-[764px] absolute text-center justify-start">
          <span className="text-black text-sm font-normal font-['Do_Hyeon'] leading-[50px]">이미 계정이 있으신가요? </span>
          <button 
            onClick={() => router.push('/login')}
            className="text-yellow-400 text-sm font-normal font-['Do_Hyeon'] leading-[50px]"
          >
            로그인하기
          </button>
        </div>
      </div>
    </div>
  );
}; 