"use client"

import React from "react";
import Image from "next/image";

export const LogoImage = () => {
  return (
    <div className="w-[134px] h-[55px]">
      <Image
        className="w-[134px] h-[55px] object-cover"
        alt="Logo"
        src="/images/logo/시작 - 온누리.png"
        width={134}
        height={55}
      />
    </div>
  );
}; 