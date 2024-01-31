"use client";
import DashboardFooter from "@/Components/DashboardFooter";
import DashboardHeader from "@/Components/DashboardHeader";
import SideBar from "@/Components/SideBar";
import Upload from "@/Components/Upload";
import { PlusCircle } from "@/Components/svgs";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleLogOut = async () => {
    try {
      const res = await signOut(auth);
      console.log(res);
    } catch (error) {}
  };
  // console.log(auth?.currentUser?.displayName);
  return (
    <div className="w-full min-h-screen flex  gap-2 bg-neutral-900">
      {/* side bar */}
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="bg-neutral-900 flex justify-between flex-col flex-1">
        <DashboardHeader />
        {activeTab == 0 && (
          <Upload
            title="Add New"
            imgSrc="FileArrowUp"
            smallImgSrc="UploadSimple"
          />
        )}
        {activeTab == 1 && (
          <Upload
            title="Speech Enhancement"
            imgSrc="FileAudio"
            smallImgSrc="SmallMagicWand"
          />
        )}
        {activeTab == 2 && (
          <Upload
            title="Transcription"
            imgSrc="transBig"
            smallImgSrc="transSmall"
          />
        )}
        {activeTab == 3 && (
          <Upload
            title="Translation"
            imgSrc="translationB"
            smallImgSrc="translationS"
          />
        )}
        {activeTab == 4 && (
          <Upload
            title="Folders"
            imgSrc="translationB"
            smallImgSrc="translationS"
          />
        )}

        <DashboardFooter />
      </div>

      {/* <button
        type="submit"
        className="w-full text-center hidden py-3 rounded bg-[#3C0753] text-white hover:bg-green-dark focus:outline-none my-1"
        onClick={() => handleLogOut}
      >
        LOGOUT
      </button> */}
    </div>
  );
};

export default page;
