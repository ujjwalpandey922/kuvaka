"use client";
import Image from "next/image";
import React, { useRef } from "react";

const Modal = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const inner = useRef(null);
  const outer = useRef(null);

  // Function to handle clicks outside the modal
  const handleOuterClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === outer.current) {
      setShowModal(false);
    }
  };
  return (
    <div
      // Modal backdrop styling
      className={`fixed inset-0 bg-[#0000007f] p-12 flex justify-center items-center z-[2000] bg-opacity-50 duration-300 overflow-y-auto `}
      ref={outer}
      onClick={(e) => handleOuterClick(e)}
    >
      <div
        // Modal content styling with dynamic color based on Pokemon type
        className={`relative text-black sm:mx-auto p-4 mt-4 w-[640px] h-[419.31px] bg-neutral-900 rounded-[27.59px] border-2 border-zinc-100 border-dashed
        `}
        ref={inner}
      >
        {/* Modal content */}
        <div className="flex flex-col justify-center  h-full items-center gap-8 relative">
          <span>
            <Image
              src={"/XCircle.svg"}
              alt="fileUp"
              width={32}
              height={32}
              className="cursor-pointer hover:scale-105 transition-all absolute top-4 right-4"
              onClick={() => setShowModal(false)}
            />
          </span>
          <h1 className="text-zinc-100 text-[28px] font-semibold text-center font-['Gothic A1'] capitalize leading-7">
            Upload file from
          </h1>
          <div className="w-full  justify-around items-center  inline-flex">
            <div className="w-40 flex-col justify-center items-center gap-4 inline-flex">
              <div className="self-stretch h-[120px] py-[34px] bg-stone-900 rounded-2xl justify-center items-center inline-flex">
                <div className="w-[31.24px] h-[52px] relative  shadow-inner flex-col justify-start items-start flex">
                  <Image
                    src={"/Frame3.svg"}
                    alt="fileUp"
                    width={64}
                    height={64}
                  />
                </div>
              </div>
              <div className="text-zinc-100 text-xl font-normal font-['Gothic A1'] leading-tight">
                Folder{" "}
              </div>
            </div>
            <div className="w-40 flex-col justify-center items-center gap-4 inline-flex">
              <div className="self-stretch h-[120px] px-12 py-7 bg-stone-900 rounded-2xl justify-center items-center inline-flex">
                <Image
                  src={"/Desktop.svg"}
                  alt="fileUp"
                  width={64}
                  height={64}
                />
              </div>
              <div className="text-zinc-100 text-xl font-normal font-['Gothic A1'] leading-tight">
                My Desktop
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
