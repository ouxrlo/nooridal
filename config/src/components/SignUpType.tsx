'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export const SignUpType = () => {
  const router = useRouter();

  return (
    <div className="w-96 h-[874px] relative bg-[#fff3ba] overflow-hidden">
      <div className="w-32 h-16 left-[135px] top-[96px] absolute bg-white rounded-full blur-[2px]" />
      <div className="w-24 h-16 left-[213px] top-[107px] absolute bg-white rounded-full blur-[2px]" />
      <div className="w-24 h-16 left-[114px] top-[88px] absolute bg-white rounded-full blur-[2px]" />
      <div className="w-24 h-16 left-[177px] top-[88px] absolute bg-white rounded-full blur-[2px]" />
      <div className="w-24 h-16 left-[188px] top-[126px] absolute bg-white rounded-full blur-[2px]" />
      <div className="w-20 h-16 left-[81px] top-[107px] absolute bg-white rounded-full blur-[2px]" />
      <div className="w-20 h-16 left-[148px] top-[131px] absolute bg-white rounded-full blur-[2px]" />
      <div className="w-20 h-16 left-[96px] top-[126px] absolute bg-white rounded-full blur-[2px]" />
      
      <div className="w-32 h-14 left-[135px] top-[109px] absolute">
        <Image
          className="w-full h-full object-contain"
          alt="Logo"
          src="/images/logo/시작 - 로고.png"
          width={134}
          height={55}
          priority
        />
      </div>

      <button 
        onClick={() => router.push('/signup/pregnant')}
        className="w-72 h-20 left-[65px] top-[313px] absolute"
      >
        <div className="w-full h-full bg-sky-200 rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30)] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-black text-4xl font-do-hyeon leading-[50px]">
          임산부
        </div>
      </button>

      <Image
        className="w-24 h-28 left-[10px] top-[273.96px] absolute origin-top-left rotate-[-15deg]"
        alt="임산부 캐릭터"
        src="/images/logo/시작 - 토깽이.png"
        width={93}
        height={108}
      />

      <button 
        onClick={() => router.push('/signup/guardian')}
        className="w-72 h-20 left-[65px] top-[447px] absolute"
      >
        <div className="w-full h-full bg-sky-200 rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30)] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-black text-4xl font-do-hyeon leading-[50px]">
          보호자
        </div>
      </button>

      <Image
        className="w-24 h-20 left-[293.22px] top-[412px] absolute origin-top-left rotate-[21.28deg]"
        alt="보호자 캐릭터"
        src="/images/logo/시작 - 댕댕이.png"
        width={98}
        height={75}
      />

      {/* 하단 구름 효과 */}
      <div className="w-52 h-44 left-[115px] top-[617px] absolute bg-white/50 rounded-full" />
      <div className="w-52 h-44 left-[-27px] top-[675px] absolute bg-white/50 rounded-full" />
      <div className="w-96 h-52 left-[93px] top-[690px] absolute bg-white/50 rounded-full" />
      <div className="w-52 h-44 left-[-27px] top-[617px] absolute bg-white/50 rounded-full" />
      <div className="w-52 h-44 left-[101px] top-[669px] absolute bg-white rounded-full" />
      <div className="w-52 h-44 left-[-41px] top-[727px] absolute bg-white rounded-full" />
      <div className="w-96 h-52 left-[79px] top-[742px] absolute bg-white rounded-full" />
      <div className="w-52 h-44 left-[-41px] top-[669px] absolute bg-white rounded-full" />
    </div>
  );
}; 