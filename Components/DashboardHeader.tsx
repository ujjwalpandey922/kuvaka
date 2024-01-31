"use client";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

// DashboardHeader component for the header section in the dashboard
const DashboardHeader = () => {
  const router = useRouter();
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {}
  };
  return (
    <div className="w-full flex justify-end gap-8 p-8 items-center">
      {/* Navigation Links */}
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

      {/* User Icons */}
      <button className="relative cursor-pointer" onClick={() => handleLogOut}>
        {/* User Circle Icon */}
        <Image alt="userIcon" src="/UserCircle.png" width={32} height={32} />
        {/* Notification Badge */}
        <Image
          alt="notificationIcon"
          src="/05.png"
          width={15}
          height={15}
          className="absolute top-0 right-0"
        />
      </button>
    </div>
  );
};

export default DashboardHeader;
