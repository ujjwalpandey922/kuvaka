import Image from "next/image";
import React from "react";

const DashboardHeader = () => {
  return (
    <div className="w-full flex justify-end gap-8 p-8 items-center">
      <span className="text-center text-zinc-100 text-sm lg:text-lg font-normal font-['DM Sans'] leading-[18px]">
        FAQs
      </span>
      <span className="justify-start items-center gap-2.5 flex">
        <span className="text-center text-zinc-100 text-sm lg:text-lg font-normal font-['DM Sans'] leading-[18px]">
          How to Use
        </span>
      </span>
      <span className="text-center text-zinc-100 text-sm lg:text-lg font-normal font-['DM Sans'] leading-[18px]">
        Support
      </span>
      <span className="text-center text-zinc-100 text-sm lg:text-lg font-normal font-['DM Sans'] leading-[18px]">
        Plans
      </span>
      <div className="relative">
        <Image alt="newIcon" src="/UserCircle.png" width={32} height={32} />
        <Image
          alt="newIcon"
          src="/05.png"
          width={15}
          height={15}
          className="absolute top-0 right-0"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
