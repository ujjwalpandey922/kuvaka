import Image from "next/image";
import React from "react";

const Package = () => {
  return (
    <div className="w-full bg-gradient-to-b mt-auto to-neutral-600 from-yellow-400 via-neutral-600 py-16 relative">
      <Image
        src="/packageBgImg.png"
        alt="bg"
        width="700"
        height="700"
        className="absolute -z-10 top-0 right-0"
      />
      <header className="flex lg:flex-row flex-col   gap-8 w-full max-w-[85rem] mx-auto my-8 z-20 relative">
        <div className="flex px-8 w-[440px] flex-col flex-wrap gap-2">
          <h1 className="text-white text-6xl font-bold font-['Oswald']">
            DEATOX
          </h1>
          <h2 className="text-yellow-400 text-6xl font-light font-['Oswald']">
            PACKAGE
          </h2>
        </div>
        <div className="flex gap-3 flex-col justify-start p-8">
          <div className="text-yellow-400 text-[32px] font-bold font-['Oswald']">
            Get your fitness plan for free!
          </div>
          <div className="max-w-[473px] text-neutral-600 text-xl font-normal font-['Open Sans']">
            Join the Deatox community today and start your journey towards a
            healthier and happier you.{" "}
          </div>
          <button className="w-max px-[15px] py-2.5 bg-yellow-400 justify-start items-start gap-2.5 inline-flex">
            <span className="text-neutral-600 text-base font-normal font-['Open Sans']">
              TRY NOW
            </span>
          </button>
        </div>
      </header>
      <div className="flex gap-8 flex-wrap justify-center ">
        {/* MONTHLY */}
        <div className="max-w-[422px] w-full p-8 z-20  relative bg-yellow-400">
          <div className="absolute top-0 left-0">
            <Image
              src="/packageDetoxCornerBg.png"
              alt="bg"
              width="70"
              height="70"
            />
            <Image
              src="/packageDetox.png"
              alt="bg"
              width="40"
              height="40"
              className="absolute top-[25%] left-[25%]"
            />
          </div>
          <div className="flex max-w-[300px] m-auto w-full  justify-start items-start gap-4 my-8 flex-col ">
            <h1 className="text-white text-2xl font-bold font-['Oswald']">
              MONTHLY
            </h1>
            <span className="text-neutral-600 text-4xl font-normal font-['Open Sans']">
              $9.99
            </span>
            <div className="w-[280px] h-[0px] border-2 border-neutral-600"></div>
            <ul className=" relative left-4  flex flex-col gap-4 list-disc text-neutral-600 max-w-[240px] text-base font-normal font-['Open Sans'] leading-7">
              <li>Customized workout plans</li>
              <li>Access to healthy recipes</li>
              <li>Advanced health tracking tools</li>
              <li>Personalized recommendations based on your goals</li>
              <li>Unlimited customer support</li>
            </ul>
            <button className="bg-neutral-600 text-center w-full p-3 text-white">
              GET NOW
            </button>
          </div>
        </div>
        {/* YEARLY */}
        <div className="max-w-[422px] w-full p-8  relative bg-yellow-400">
          <div className="absolute top-0 left-0">
            <Image
              src="/packageDetoxCornerBg.png"
              alt="bg"
              width="70"
              height="70"
            />
            <Image
              src="/packageDetox.png"
              alt="bg"
              width="40"
              height="40"
              className="absolute top-[25%] left-[25%]"
            />
          </div>
          <div className="flex max-w-[300px] m-auto w-full justify-start items-start gap-4 my-8 flex-col ">
            <h1 className="text-white text-2xl font-bold font-['Oswald']">
              YEARLY
            </h1>
            <span className="text-neutral-600 text-4xl font-normal font-['Open Sans']">
              $9.99
            </span>
            <div className="w-[280px] h-[0px] border-2 border-neutral-600"></div>
            <ul className=" relative left-4  flex flex-col gap-4 list-disc text-neutral-600 max-w-[240px] text-base font-normal font-['Open Sans'] leading-7">
              <li>Customized workout plans</li>
              <li>Access to healthy recipes</li>
              <li>Advanced health tracking tools</li>
              <li>Personalized recommendations based on your goals</li>
              <li>Unlimited customer support</li>
            </ul>
            <button className="bg-neutral-600 text-center w-full p-3 text-white">
              GET NOW
            </button>
          </div>
        </div>
        {/* ENTERPRISE */}
        <div className="max-w-[422px]  p-8  w-full relative bg-white">
          <div className="absolute top-0 left-0">
            <Image src="/yellowTop.png" alt="bg" width="70" height="70" />
            <Image
              src="/packageDetox.png"
              alt="bg"
              width="40"
              height="40"
              className="absolute top-[25%] left-[25%]"
            />
          </div>
          <div className="flex max-w-[300px] m-auto w-full justify-start items-start gap-4 my-8 flex-col  h-full">
            <h1 className="text-neutral-600 mb-12 text-2xl font-bold font-['Oswald']">
              ENTERPRISE
            </h1>
            <div className="w-[280px] h-[0px] border-2 border-yellow-400"></div>
            <p className="w-[280px] text-neutral-600 text-base font-normal font-['Open Sans']">
              Looking to offer personalized fitness and meal plans to your
              employees? <br />
              <br />
              Our Enterprise Plan brings you the best features.
            </p>
            <button className="bg-yellow-400 text-center mt-auto mb-16 w-full p-3 text-white">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
