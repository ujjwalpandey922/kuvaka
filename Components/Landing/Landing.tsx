"use client";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import LandingFooter from "./LandingFooter";
import Package from "./Package";
import Features from "./Features";
import Header from "./Header";
import Image from "next/image";
const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen relative ">
      <Image
        width={400}
        height={200}
        alt="gif"
        src={"/strip.png"}
        className="absolute lg:block hidden  left-[8%] top-0  z-10"
      />
      <Header />
      <Features />
      <Package />
      <LandingFooter />
    </div>
  );
};

export default Landing;
