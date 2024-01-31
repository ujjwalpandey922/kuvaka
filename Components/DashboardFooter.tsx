import React from "react";

// DashboardFooter component for the footer section in the dashboard
const DashboardFooter = () => {
  return (
    <div className="w-full py-5 border border-zinc-600 justify-center items-center gap-2 inline-flex">
      {/* Text content with copyright and policy links */}
      <div className="text-center flex gap-12 text-zinc-100 text-sm lg:text-lg font-light font-['Gothic A1'] leading-[18px]">
        <span>Copyright © 2023 Decrackle </span>
        <span className=" md:block hidden">Terms of service </span>
        <span className=" md:block hidden">Privacy policy </span>
        <span className=" md:block hidden"> Cookie policy </span>
      </div>
    </div>
  );
};

export default DashboardFooter;
