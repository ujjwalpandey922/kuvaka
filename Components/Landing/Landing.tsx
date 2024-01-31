import React from "react";
import LandingFooter from "./LandingFooter";
import Package from "./Package";
import Features from "./Features";
import Header from "./Header";
import Image from "next/image";

// Landing component combining Header, Features, Package, and LandingFooter
const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Decorative Image */}
      <Image
        width={400}
        height={200}
        alt="gif"
        src={"/strip.png"}
        className="absolute lg:block hidden left-[8%] top-0 z-10"
      />

      {/* Header Component */}
      <Header />

      {/* Features Component */}
      <Features />

      {/* Package Component */}
      <Package />

      {/* LandingFooter Component */}
      <LandingFooter />
    </div>
  );
};

export default Landing;
