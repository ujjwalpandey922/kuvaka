
import Image from "next/image";

const TryNow: React.FC = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex lg:flex-row flex-col-reverse ">
      <div className="flex justify-center items-start p-4  lg:w-[50%] w-full bg-amber-300">
        <div className="w-full flex justify-center items-center gap-4 flex-col ">
          <h1 className="max-w-[638px] my-8 text-zinc-800 text-4xl font-bold font-['Open Sans']">
            Subscribe to our Enterprise Plan{" "}
          </h1>
          <p className="max-w-[638px] my-4 text-justify text-zinc-800 text-base font-normal font-['Open Sans']">
            Our Enterprise Plan is designed for businesses and organizations
            that want to provide their employees or members with a personalized
            plans to achieve their health and wellness goals. With our
            Enterprise Plan, you'll get access to a suite of advanced features
            and tools.
            <br />
            <br />
            To request more information about our Enterprise Plan , please fill
            out the form below. One of our representatives will be in touch with
            you shortly.
          </p>
          <div className="max-w-[604px] flex my-4 items-start  justify-start w-full text-zinc-800 text-2xl font-bold font-['Open Sans']">
            <Image width={20} height={20} alt="gif" src={"/Check.svg"} />
          </div>
          <div className="max-w-[604px] flex my-4 gap-2 text-justify items-start text-zinc-800 text-2xl font-bold font-['Open Sans']">
            <Image width={20} height={20} alt="gif" src={"/Check.svg"} />
            Priority access to our team of experts for technical assistance and
            troubleshooting
          </div>
          <div className="max-w-[604px] my-4 text-justify flex items-start gap-2 text-zinc-800 text-2xl font-bold font-['Open Sans']">
            <Image width={20} height={20} alt="gif" src={"/Check.svg"} />
            Access advanced analytics and reporting to track your organization's
            fitness and wellness goals
          </div>
          <Image width={200} height={200} alt="gif" src={"/deatox.png"} />
        </div>
      </div>
      <div className="container gap-2 my-3 flex-1 max-w-lg mx-auto flex flex-col items-start justify-center px-2 ">
        <h1 className="text-neutral-600 text-4xl mt-4 mb-8 text-start w-full font-bold font-['Open Sans']">
          Enterprise Plan Request
        </h1>
        {/*  Full Name */}
        <div className=" w-full flex flex-col gap-1">
          <label className="text-neutral-400 text-base font-normal font-['Open Sans']">
            Full Name
          </label>
          <input
            type="text"
            className="block border-grey-light w-full p-5 mb-4 rounded-[7px] border border-neutral-400"
            name="email"
            placeholder="Full Name"
          />
        </div>
        {/*  Company Name */}
        <div className=" w-full flex flex-col gap-1">
          <label className="text-neutral-400 text-base font-normal font-['Open Sans']">
            Company Name
          </label>
          <input
            type="text"
            className="block border-grey-light w-full p-5 mb-4 rounded-[7px] border border-neutral-400"
            name="email"
            placeholder="Company Name"
          />
        </div>
        {/*  Email */}
        <div className=" w-full flex flex-col gap-1">
          <label className="text-neutral-400 text-base font-normal font-['Open Sans']">
            Email
          </label>
          <input
            type="text"
            className="block border-grey-light w-full p-5 mb-4 rounded-[7px] border border-neutral-400"
            name="email"
            placeholder="Email"
          />
        </div>
        {/*  Phone */}
        <div className=" w-full flex flex-col gap-1">
          <label className="text-neutral-400 text-base font-normal font-['Open Sans']">
            Phone
          </label>
          <input
            type="text"
            className="block border-grey-light w-full p-5 mb-4 rounded-[7px] border border-neutral-400"
            name="email"
            placeholder="Phone"
          />
        </div>
        {/*  Remark */}
        <div className=" w-full flex flex-col gap-1">
          <label className="text-neutral-400 text-base font-normal font-['Open Sans']">
            Remark
          </label>
          <textarea
            rows={5}
            className="block border-grey-light w-full p-5 mb-4 rounded-[7px] border border-neutral-400"
            name="email"
            placeholder="Remark"
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full text-center py-3 my-5 rounded bg-amber-300 text-neutral-600 text-xl font-normal font-['Inter']  hover:bg-green-dark focus:outline-none "
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TryNow;
