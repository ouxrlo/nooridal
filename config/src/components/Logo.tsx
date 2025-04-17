"use client"

import React from "react";
import { LogoImage } from "./LogoImage";

export const Logo = () => {
  return (
    <div className="w-[232px] h-[104px]">
      <div className="relative h-[104px]">
        <div className="w-[121px] top-2 left-[54px] rounded-[60.5px/30.5px] absolute h-[61px] bg-white blur-[2px]" />
        <div className="w-[100px] top-[19px] left-[132px] rounded-[50px/30.5px] absolute h-[61px] bg-white blur-[2px]" />
        <div className="w-[99px] top-0 left-[33px] rounded-[49.5px/30.5px] absolute h-[61px] bg-white blur-[2px]" />
        <div className="w-[100px] top-0 left-24 rounded-[50px/30.5px] absolute h-[61px] bg-white blur-[2px]" />
        <div className="w-[103px] top-[38px] left-[107px] rounded-[51.5px/30.5px] absolute h-[61px] bg-white blur-[2px]" />
        <div className="w-20 top-[19px] left-0 rounded-[40px/30.5px] absolute h-[61px] bg-white blur-[2px]" />
        <div className="w-[79px] top-[43px] left-[67px] rounded-[39.5px/30.5px] absolute h-[61px] bg-white blur-[2px]" />
        <div className="w-[79px] top-[38px] left-[15px] rounded-[39.5px/30.5px] absolute h-[61px] bg-white blur-[2px]" />
        
        <div className="absolute w-[134px] h-[55px] top-[21px] left-[54px]">
          <LogoImage />
        </div>
      </div>
    </div>
  );
}; 