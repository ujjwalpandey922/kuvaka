import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";

const Upload = ({
  title,
  imgSrc,
  smallImgSrc,
}: {
  title: string;
  imgSrc: string;
  smallImgSrc: string;
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="max-w-[640px]  p-4  lg:m-auto lg:my-8 my-12 mx-auto w-full h-full flex justify-center items-center lg:gap-8 gap-4 flex-col border-dashed bg-neutral-900 rounded-[27.59px] border-2 border-zinc-100 ">
      
      {/* Title */}
      <h1 className="text-center text-stone-300 text-lg font-normal font-['DM Sans'] capitalize leading-[18px] mt-8 mb-auto">
        {title}
      </h1>
      {/* Upload icon */}
      <Image src={`/${imgSrc}.svg`} alt="fileUp" width={64} height={64} />
      <div className="flex flex-col gap-1">
        {/* Upload button */}
        <button
          className="lg:max-w-lg w-full lg:px-[125px] lg:py-[18px] px-4 py-2 bg-gradient-to-b from-lime-300 to-lime-600 rounded-[40px] justify-start items-center gap-2 inline-flex"
          onClick={() => setOpenModal(true)}
        >
          <div className="text-center flex gap-2 items-center justify-center text-neutral-900 text-base font-medium font-['Gothic A1'] capitalize leading-[18px] cursor-pointer hover:scale-105 transition-all">
            Upload the file
            <Image
              src={`/${smallImgSrc}.svg`}
              alt="fileUp"
              width={18}
              height={18}
            />
          </div>
        </button>
        {/* Or drag here */}
        <span className="text-center text-zinc-100 text-sm font-normal font-['DM Sans'] leading-[18px]">
          Or drag here
        </span>
      </div>
      {/* File type information */}
      <li className="text-center decoration-dotted text-stone-300 text-sm font-normal font-['DM Sans'] leading-[18px]">
        Audio and Video files only
      </li>
      {/* View Recently Uploaded files */}
      <div className="text-center mt-auto mb-8 text-stone-300 text-base font-normal font-['DM Sans'] underline capitalize leading-[18px]">
        View Recently {title} files
      </div>
      {/* Modal for file upload details */}
      {openModal && <Modal setShowModal={setOpenModal} />}
    </div>
  );
};

export default Upload;
