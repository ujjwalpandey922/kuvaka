"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <div className="bg-yellow-400 ">
      <nav className="flex justify-between px-12 shadow border-b-white p-4 border-b-2 ">
        <div className="flex gap-8 justify-center items-center">
          <Image width={50} height={50} alt="gif" src={"/deatoxWhite.png"} />
          <ul className=" hidden lg:flex gap-12 relative z-20">
            <li className="text-white text-2xl font-normal font-['Open Sans']">
              HOME
            </li>
            <li className="text-white text-2xl font-normal font-['Open Sans']">
              ABOUT
            </li>
            <li className="text-white text-2xl font-normal font-['Open Sans']">
              MEAL PLANS
            </li>
            <li className="text-white text-2xl font-normal font-['Open Sans']">
              WORKOUT ROUTINE
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <button className="text-white text-2xl font-normal font-['Open Sans']">
            LOG IN
          </button>
          <button className=" px-8 pt-[13px] pb-3.5 bg-white justify-start items-start gap-2.5 inline-flex">
            <div
              className="text-neutral-600 text-2xl font-normal font-['Open Sans']"
              onClick={() => router.push("/signup")}
            >
              SIGN UP
            </div>
          </button>
        </div>
      </nav>
      <div className="flex justify-between py-48  relative z-20">
        {/* Left Side Image */}
        <div className="lg:flex hidden relative justify-center items-center w-[40%]">
          {/* ALL 5 Circles */}
          <div className="w-[478px] h-[478px] rounded-full border-8 border-amber-300 absolute" />
          <div className="w-[578px] h-[578px] rounded-full border-8 border-amber-300 absolute border-opacity-80" />
          <div className="w-[682px] h-[682px] rounded-full border-8 border-amber-300 absolute border-opacity-60" />
          <div className="w-[774px] h-[774px] rounded-full border-8 border-amber-300 absolute border-opacity-40" />
          <div className="w-[862px] h-[862px] rounded-full border-8 border-amber-300 absolute border-opacity-20" />
          {/* ALL 5 Circles */}
          {/* main detox image */}
          <Image width={400} height={400} alt="gif" src={"/deatoxWhite.png"} />
          {/* Other 5 Images */}
          <Image
            width={150}
            height={150}
            alt="gif"
            src={"/header1.svg"}
            className="absolute -top-8 right-8"
          />
          <Image
            width={150}
            height={150}
            alt="gif"
            src={"/header2.svg"}
            className="absolute -top-[25%]"
          />
          <Image
            width={180}
            height={180}
            alt="gif"
            src={"/header3.svg"}
            className="absolute -bottom-20 right-16 "
          />
          <Image
            width={180}
            height={180}
            alt="gif"
            src={"/header4.svg"}
            className="absolute left-12 -bottom-[40%]"
          />
          <Image
            width={100}
            height={100}
            alt="gif"
            src={"/header5.svg"}
            className="absolute left-0 bottom-[50%]"
          />
        </div>

        {/* Right Side Image */}
        <div className="flex p-4 max-w-[60%] flex-col gap-8  mx-auto relative z-30">
          <div className="max-w-[85rem] w-full relative text-neutral-600 text-[64px] font-bold font-['Oswald'] tracking-[9.60px] ">
            CHANGE YOUR HABITS
            <br />
            CHANGE YOUR LIFE
            <div className="text-white text-xl absolute bottom-6 right-0 font-normal font-['Oswald']">
              WITH AI
            </div>
          </div>
          <p className="max-w-[845px] w-full text-neutral-600 text-2xl font-normal font-['Open Sans']">
            Our AI-powered algorithm takes into consideration your goals,
            dietary restrictions, food preferences, and fitness level to create
            a comprehensive plan that optimizes your health and fitness journey.
          </p>
          <ul className="flex justify-start gap-8 flex-wrap">
            <li className="flex gap-2 justify-center items-center">
              <Image width={20} height={20} alt="gif" src={"/Check.svg"} />
              <p className="text-neutral-600 text-2xl font-normal font-['Open Sans']">
                EASY ONBOARDING
              </p>
            </li>
            <li className="flex gap-2 justify-center items-center">
              <Image width={20} height={20} alt="gif" src={"/Check.svg"} />
              <p className="text-neutral-600 text-2xl font-normal font-['Open Sans']">
                EASY ONBOARDING
              </p>
            </li>
            <li className="flex gap-2 justify-center items-center">
              <Image width={20} height={20} alt="gif" src={"/Check.svg"} />
              <p className="text-neutral-600 text-2xl font-normal font-['Open Sans']">
                EASY ONBOARDING
              </p>
            </li>
          </ul>
          <button className="w-max px-[15px] py-2.5 bg-neutral-600 justify-start items-start gap-2.5 inline-flex">
            <span className="text-white text-base font-normal font-['Open Sans']">
              TRY NOW
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
