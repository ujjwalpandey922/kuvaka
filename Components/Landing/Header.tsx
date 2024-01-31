// Import necessary modules and components
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

// Header component definition
const Header = () => {
  // Use the Next.js useRouter hook to access the router object
  const router = useRouter();

  // Return the JSX for the Header component
  return (
    <div className="bg-yellow-400">
      {/* Navigation Bar */}
      <nav className="flex justify-between px-12 shadow border-b-white p-4 border-b-2">
        {/* Logo and Navigation Links */}
        <div className="flex gap-8 justify-center items-center">
          <Image width={50} height={50} alt="gif" src={"/deatoxWhite.png"} />
          <ul className="hidden lg:flex gap-12 relative z-20">
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
        {/* Authentication Buttons */}
        <div className="flex gap-4">
          <button className="text-white lg:text-2xl text-md font-normal font-['Open Sans']">
            LOG IN
          </button>
          <button className="lg:px-8 px-2 bg-white justify-center items-center inline-flex">
            <div
              className="text-neutral-600 lg:text-2xl text-md font-normal font-['Open Sans']"
              onClick={() => router.push("/signup")}
            >
              SIGN UP
            </div>
          </button>
        </div>
      </nav>

      {/* Header Content */}
      <div className="flex justify-between py-48 relative z-20">
        {/* Left Side Image */}
        <div className="lg:flex hidden relative justify-center items-center w-[40%]">
          {/* Circles */}
          {[478, 578, 682, 774].map((size, index) => (
            <div
              key={index}
              className={`w-[${size}px] h-[${size}px] rounded-full border-8 border-amber-300 absolute border-opacity-${
                80 - index * 20
              }`}
            />
          ))}
          {/* Main and Other Images */}
          <Image width={400} height={400} alt="gif" src={"/deatoxWhite.png"} />
          {[
            ["header1.svg", "-top-8 right-8"],
            ["header2.svg", "-top-[25%]"],
            ["header3.svg", "-bottom-20 right-16"],
            ["header4.svg", "left-12 -bottom-[40%]"],
            ["header5.svg", "left-0 bottom-[50%]"],
          ].map((image, index) => (
            <Image
              key={index}
              width={150}
              height={150}
              alt="gif"
              src={image[0]}
              className={`absolute ${image[1]}`}
            />
          ))}
        </div>

        {/* Right Side Content */}
        <div className="flex p-4 max-w-[60%] flex-col gap-8 mx-auto relative z-30">
          {/* Title */}
          <div className="max-w-[85rem] w-full relative text-neutral-600 text-[64px] font-bold font-['Oswald'] tracking-[9.60px]">
            CHANGE YOUR HABITS
            <br />
            CHANGE YOUR LIFE
            <div className="text-white text-xl absolute bottom-6 right-0 font-normal font-['Oswald']">
              WITH AI
            </div>
          </div>
          {/* Description */}
          <p className="max-w-[845px] w-full text-neutral-600 text-2xl font-normal font-['Open Sans']">
            Our AI-powered algorithm takes into consideration your goals,
            dietary restrictions, food preferences, and fitness level to create
            a comprehensive plan that optimizes your health and fitness journey.
          </p>
          {/* Features List */}
          <ul className="flex justify-start gap-8 flex-wrap">
            {[1, 2, 3].map((index) => (
              <li
                key={index}
                className="flex gap-2 justify-center items-center"
              >
                <Image width={20} height={20} alt="gif" src={"/Check.svg"} />
                <p className="text-neutral-600 text-2xl font-normal font-['Open Sans']">
                  EASY ONBOARDING
                </p>
              </li>
            ))}
          </ul>
          {/* CTA Button */}
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

// Export the Header component
export default Header;
