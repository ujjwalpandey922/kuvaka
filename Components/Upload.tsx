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
    <div className="max-w-[640px] max-h-[486px] p-4 w-full h-full flex justify-center items-center gap-8 flex-col border-dashed bg-neutral-900 rounded-[27.59px] border-2 border-zinc-100 m-auto">
      <h1 className="text-center text-stone-300 text-lg font-normal font-['DM Sans'] capitalize leading-[18px] mt-8 mb-auto">
        {title}
      </h1>
      <Image src={`/${imgSrc}.svg`} alt="fileUp" width={64} height={64} />
      <div className="flex flex-col gap-1">
        <button
          className=" max-w-lg w-full px-[125px] py-[18px] bg-gradient-to-b from-lime-300 to-lime-600 rounded-[40px] justify-start items-center gap-2 inline-flex"
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
        <span className="text-center text-zinc-100 text-sm font-normal font-['DM Sans'] leading-[18px]">
          Or drag here
        </span>
      </div>
      <li className="text-center decoration-dotted text-stone-300 text-sm font-normal font-['DM Sans'] leading-[18px]">
        Audio and Video file only
      </li>
      <div className="text-center mt-auto mb-8 text-stone-300 text-base font-normal font-['DM Sans'] underline capitalize leading-[18px]">
        View Recently {title} files
      </div>
      {openModal && <Modal setShowModal={setOpenModal} />}
    </div>
  );
};

export default Upload;
