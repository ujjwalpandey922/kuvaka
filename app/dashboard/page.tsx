"use client";
import DashboardFooter from "@/Components/DashboardFooter";
import DashboardHeader from "@/Components/DashboardHeader";
import SideBar from "@/Components/SideBar";
import Upload from "@/Components/Upload";
import React, { useState } from "react";

const page = () => {
  const [activeTab, setActiveTab] = useState(0);
  
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

      
    </div>
  );
};

export default page;
