import Image from "next/image";
import React from "react";

const LandingFooter = () => {
  return (
    <div className="bg-neutral-600 mt-auto justify-around gap-8 w-full p-4 py-32 flex flex-wrap">
      {/* COMPANY */}

      <div className="max-w-[250px] min-h-[273px] flex-col justify-start items-start gap-[15px] inline-flex">
        <div className="text-amber-300 text-2xl font-bold font-['Open Sans']">
          COMPANY
        </div>
        <div className="text-white text-2xl font-normal font-['Open Sans']">
          About us
        </div>
        <div className="text-white text-2xl font-normal font-['Open Sans']">
          Team
        </div>
        <div className="text-white text-2xl font-normal font-['Open Sans']">
          Blogs
        </div>
        <div className="text-white text-2xl font-normal font-['Open Sans']">
          Meal Plans
        </div>
        <div className="text-white text-2xl font-normal font-['Open Sans']">
          Fitness Plans
        </div>
      </div>
      {/* Detox */}
      <div className="w-[250px] h-[273px] flex-col justify-start items-start gap-[15px] inline-flex">
        <div className="text-amber-300 text-2xl font-bold font-['Open Sans']">
          DEATOX +
        </div>
        <div className="text-white text-2xl font-normal font-['Open Sans']">
          Partner with us
        </div>
        <div className="text-white text-2xl font-normal font-['Open Sans']">
          Enterprise package
        </div>
        <div className="text-white text-2xl font-normal font-['Open Sans']">
          Build gym
        </div>
        <div className="text-white text-2xl font-normal font-['Open Sans']">
          For enterprise
        </div>
        <div className="text-white text-2xl font-normal font-['Open Sans']">
          t&c for business
        </div>
      </div>
      {/* Contact Us */}
      <div className="w-[250px] h-[129px] flex-col justify-start items-start gap-[15px] inline-flex">
        <div className="text-amber-300 text-2xl font-bold font-['Open Sans']">
          CONTACT US
        </div>
        <div className="text-white text-2xl font-normal font-['Open Sans']">
          Help and support
        </div>
        <div className="text-white text-2xl font-normal font-['Open Sans']">
          Enquire
        </div>
      </div>

      <Image width={270} height={240} alt="gif" src={"/deatoxWhite.png"} />
    </div>
  );
};

export default LandingFooter;
