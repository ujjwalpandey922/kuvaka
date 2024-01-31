import Image from "next/image";
import React from "react";

const SideBar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="bg-stone-900 lg:max-w-[20rem] max-w-[5rem] w-full flex flex-col gap-2 ">
      {/* Logo */}
      <div className=" flex gap-2 lg:justify-center justify-start p-3 lg:p-8">
        <Image alt="logo" width={25} height={41} src="logo.svg" />

        <div className="text-zinc-100 lg:block hidden text-4xl font-normal font-['Oxygen']">
          <span className=" text-4xl ">D</span>
          <span className=" text-[29px] ">ecrackle</span>
        </div>
      </div>
      {/* Ul/LI */}
      <ul className=" my-4 mx-2  flex flex-col gap-12 w-full">
        {/* NEW ICON */}
        <li
          className={`cursor-pointer flex gap-2 justify-start items-center hover:scale-105 transition-all  `}
          onClick={() => setActiveTab(0)}
        >
          {activeTab === 0 ? (
            <div className="relative flex ">
              <span className="bg-lime-300 h-12 w-1 absolute -left-1 "></span>
              <Image
                alt="newIcon"
                src="/PlusCircleG.svg"
                width={44}
                height={44}
                className="ms-1"
              />
            </div>
          ) : (
            <Image alt="newIcon" src="/PlusCircle.svg" width={44} height={44} />
          )}
          <div
            className={`text-center ${
              activeTab === 0 ? "text-lime-300" : "text-zinc-100"
            } text-xl lg:block hidden font-medium font-['DM Sans'] leading-[18px]`}
          >
            Add New
          </div>
        </li>
        {/* SPEECH*/}
        <li
          className="flex gap-2 justify-start items-center hover:scale-105 transition-all cursor-pointer"
          onClick={() => setActiveTab(1)}
        >
          {activeTab === 1 ? (
            <div className="relative flex ">
              <span className="bg-lime-300 h-12 w-1 absolute -left-1 "></span>

              <Image
                alt="newIcon"
                src="/MagicWandG.svg"
                width={44}
                height={44}
                className="ms-1"
              />
            </div>
          ) : (
            <Image alt="newIcon" src="/MagicWand.svg" width={44} height={44} />
          )}
          <div
            className={`text-center ${
              activeTab === 1 ? "text-lime-300" : "text-zinc-100"
            } text-xl font-medium lg:block hidden font-['DM Sans'] leading-[18px]`}
          >
            Speech Enhancement
          </div>
        </li>
        {/* Transcription*/}
        <li
          className="flex gap-2 justify-start items-center hover:scale-105 transition-all cursor-pointer"
          onClick={() => setActiveTab(2)}
        >
          {activeTab === 2 ? (
            <div className="relative flex ">
              <span className="bg-lime-300 h-12 w-1 absolute -left-1 "></span>
              <Image
                alt="newIcon"
                src="/SubtitlesG.svg"
                width={44}
                height={44}
                className="ms-1"
              />
            </div>
          ) : (
            <Image alt="newIcon" src="/Subtitles.svg" width={44} height={44} />
          )}
          <div
            className={`text-center ${
              activeTab === 2 ? "text-lime-300" : "text-zinc-100"
            } text-xl font-medium lg:block hidden font-['DM Sans'] leading-[18px]`}
          >
            Transcription
          </div>
        </li>
        {/* Translation*/}
        <li
          className="flex gap-2 justify-start items-center hover:scale-105 transition-all cursor-pointer "
          onClick={() => setActiveTab(3)}
        >
          {activeTab === 3 ? (
            <div className="relative flex ">
              <span className="bg-lime-300 h-12 w-1 absolute -left-1 "></span>
              <Image
                alt="newIcon"
                src="/translationG.png"
                width={44}
                height={44}
                className="ms-1"
              />
            </div>
          ) : (
            <Image
              alt="newIcon"
              src="/translation.png"
              width={44}
              height={44}
            />
          )}
          <div
            className={`text-center ${
              activeTab === 3 ? "text-lime-300" : "text-zinc-100"
            } text-xl font-medium lg:block hidden font-['DM Sans'] leading-[18px]`}
          >
            translation
          </div>
        </li>
        {/* Folder*/}
        <li
          className="flex gap-2 justify-start items-center hover:scale-105 transition-all cursor-pointer "
          onClick={() => setActiveTab(4)}
        >
          {activeTab === 4 ? (
            <div className="relative flex ">
              <span className="bg-lime-300 h-12 w-1 absolute -left-1 "></span>

              <Image
                alt="newIcon"
                src="/translationG.png"
                width={44}
                className="ms-1"
                height={44}
              />
            </div>
          ) : (
            <Image
              alt="newIcon"
              src="/FolderNotchOpen.svg"
              width={44}
              height={44}
            />
          )}
          <div
            className={`text-center ${
              activeTab === 4 ? "text-lime-300" : "text-zinc-100"
            } text-xl font-medium lg:block hidden font-['DM Sans'] leading-[18px]`}
          >
            Folders
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
