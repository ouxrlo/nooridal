'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { MouseEvent } from 'react';

export const Screen = () => {
  const router = useRouter();

  const handleStartClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    router.push("/login");
  };

  const preventDefault = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="bg-[#fff3ba] flex flex-row justify-center w-full" onClick={preventDefault}>
      <div className="bg-[#fff3ba] overflow-hidden w-[402px] h-[874px]" onClick={preventDefault}>
        <div className="relative w-[426px] h-[476px] top-[142px]" onClick={preventDefault}>
          <div className="absolute w-[350px] h-[350px] top-[50px] left-[25px] bg-white rounded-[175px] blur-[2px] pointer-events-none" />

          <Image
            className="absolute w-[150px] h-[90px] top-[310px] left-[30px] opacity-100 pointer-events-none"
            alt="구름1"
            src="/images/logo/구름-1.png"
            width={150}
            height={90}
          />
          <Image
            className="absolute w-[150px] h-[90px] top-[70px] left-[20px] opacity-100 pointer-events-none"
            alt="구름2"
            src="/images/logo/구름-2.png"
            width={150}
            height={90}
          />
          <Image
            className="absolute w-[150px] h-[90px] top-[240px] left-[260px] opacity-100 pointer-events-none"
            alt="구름 배경"
            src="/images/logo/구름.png"
            width={150}
            height={90}
          />

          <div className="absolute w-[190px] h-[110px] top-[20px] left-[220px] pointer-events-none z-10">
            <Image
              className="object-contain"
              alt="온누리"
              src="/images/logo/시작 - 온누리.png"
              fill
              priority
            />
          </div>

          <div className="absolute w-[200px] h-[100px] top-[100px] left-[220px] pointer-events-none z-10">
            <Image
              className="object-contain"
              alt="하늘색 구름"
              src="/images/logo/시작 - 하늘구름.png"
              fill
              priority
            />
          </div>

          <div className="absolute w-[180px] h-[80px] top-[180px] left-[120px] pointer-events-none">
            <Image
              className="object-contain"
              alt="로고"
              src="/images/logo/시작 - 로고.png"
              fill
              priority
            />
          </div>

          <Image
            className="absolute w-[45px] h-[45px] top-[130px] left-[60px] transform -rotate-12 pointer-events-none"
            alt="토깽이"
            src="/images/logo/시작 - 토깽이.png"
            width={140}
            height={140}
          />
          <Image
            className="absolute w-[45px] h-[45px] top-[100px] left-[190px] pointer-events-none"
            alt="댕댕이"
            src="/images/logo/시작 - 댕댕이.png"
            width={45}
            height={45}
          />
          <Image
            className="absolute w-[45px] h-[45px] top-[250px] left-[80px] pointer-events-none"
            alt="고냥이"
            src="/images/logo/시작 - 고냥이.png"
            width={45}
            height={45}
          />
          <Image
            className="absolute w-[40px] h-[40px] top-[230px] left-[300px] pointer-events-none"
            alt="병아리"
            src="/images/logo/시작 - 병아리.png"
            width={110}
            height={110}
          />
          <Image
            className="absolute w-[30px] h-[30px] top-[150px] left-[140px] pointer-events-none"
            alt="별"
            src="/images/logo/시작 - 별.png"
            width={60}
            height={60}
          />

          <button 
            className="absolute w-[170px] h-[50px] top-[320px] left-[115px] cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none z-10"
            onClick={handleStartClick}
          >
            <Image
              className="absolute w-[170px] h-[50px] top-0 left-0 pointer-events-none"
              alt="시작 버튼"
              src="/images/logo/시작 - 버튼.png"
              width={170}
              height={50}
            />
          </button>
        </div>
      </div>
    </div>
  );
}; 