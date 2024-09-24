import React from "react";
import "./clip.css";
export const HomeIconCard: React.FC = () => {
  return (
    <div className="relative flex justify-end w-[93px] h-[19px] z-[1] transition ease-linear delay-75">
      <div className="absolute w-[40px] h-[40px] top-[-21px] left-[52px] rounded-full overflow-hidden z-[1]">
        <div className="absolute inset-0 w-full h-full bg-primary-dark clip-slice-2"></div>
      </div>
      <div className="absolute border-l-[20px] border-l-transparent border-b-[20px] border-b-[#252836] z-[-1]"></div>
    </div>
  );
};

export const HomeIconCardInverse : React.FC = () => {
    return (
      <div className="relative flex justify-end w-[93px] h-[19px]">
        <div className="absolute w-[40px] h-[40px] left-[52px] rounded-full overflow-hidden z-[1]">
          <div className="absolute inset-0 w-full h-full bg-primary-dark clip-slice-1"></div>
        </div>
        <div className="absolute border-l-[20px] border-l-transparent border-t-[20px] border-t-[#252836]"></div>
      </div>
    );
}


export const CircleSlices: React.FC = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        {/* Container for the full circle */}
        <div className="relative w-[300px] h-[300px] rounded-full bg-[#E0E2E7] overflow-hidden">
          {/* Slice 1 (Top-Right) */}
          <div className="absolute inset-0 w-full h-full bg-[#EB966A] clip-slice-1"></div>
          {/* Slice 2 (Bottom-Right) */}
          <div className="absolute inset-0 w-full h-full bg-[#6AEB96] clip-slice-2"></div>
          {/* Slice 3 (Bottom-Left) */}
          <div className="absolute inset-0 w-full h-full bg-[#966AEB] clip-slice-3"></div>
          {/* Slice 4 (Top-Left) */}
          <div className="absolute inset-0 w-full h-full bg-[#E0EB6A] clip-slice-4"></div>
        </div>
      </div>
    );
  };
