"use client";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { auth, googleProvider } from "@/config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Image from "next/image";

// Interface for user credentials
interface Credentials {
  email: string;
  password: string;
  confirmPassword: string;
}

// Signup component for user registration
const Signup: React.FC = () => {
  // State for user credentials
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Next.js router instance
  const router = useRouter();

  // Handle input changes
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((pre) => ({ ...pre, [name]: value }));
  };

  // Handle user signup
  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      if (res.user) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log("Signup ERROR", error);
    }
  };

  // Handle user signup with Google
  const handleSignupWithGoogle = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await signInWithPopup(auth, googleProvider);
        if (res.user) {
          router.push("/dashboard");
        }
    } catch (error) {
      console.log("Signup ERROR", error);
    }
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex lg:flex-row flex-col-reverse ">
      {/* Left Section */}
      <div className="flex justify-center items-center w-full lg:w-[50%] bg-amber-300">
        <div className="w-full">
          <Image
            width={50}
            height={50}
            className="w-full cursor-pointer"
            alt="gif"
            src={"/gifimg.gif"}
            onClick={() => router.push("/trynow")}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="container flex-1 max-w-lg mx-auto flex flex-col items-center justify-center px-2 ">
        <h1 className="text-neutral-600 text-4xl text-start w-full font-bold font-['Open Sans']">
          Welcome!
        </h1>

        {/* Email */}
        <div className="mt-8 w-full flex flex-col gap-1">
          <label className="text-neutral-400 text-base font-normal font-['Open Sans']">
            Email Address
          </label>
          <input
            type="text"
            className="block border-grey-light w-full p-5 mb-4 rounded-[7px] border border-neutral-400"
            name="email"
            placeholder="umartinez@gmail.com"
            value={credentials.email}
            onChange={(e) => handleOnchange(e)}
          />
        </div>

        {/* Password */}
        <div className="mb-4 relative w-full flex flex-col gap-1">
          <label className="text-neutral-400 text-base font-normal font-['Open Sans'] mb-2">
            Password
          </label>
          <input
            type="password"
            className="block  border-grey-light w-full p-5  rounded-[7px] border border-neutral-400 "
            name="password"
            placeholder="********"
            value={credentials.password}
            onChange={(e) => handleOnchange(e)}
          />
          <Image
            width={25}
            height={25}
            alt="tick"
            src={"tick.svg"}
            className="absolute right-4 top-[50%]"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4 relative w-full flex flex-col gap-1">
          <label className="text-neutral-400 text-base font-normal font-['Open Sans'] mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            className="block  border-grey-light w-full p-5  mb-4 rounded-[7px] border border-neutral-400"
            name="confirmPassword"
            placeholder="********"
            value={credentials.confirmPassword}
            onChange={(e) => handleOnchange(e)}
          />
          <Image
            width={25}
            height={25}
            alt="tick"
            src={"tick.svg"}
            className="absolute right-4 top-[50%]"
          />
        </div>

        {/* TERMS AND CONDITION */}
        <div className="w-[450px] text-center">
          <span className="text-neutral-400 text-base font-normal font-['Inter']">
            By signing up you agree with
          </span>
          <span className="text-blue-600 text-base font-normal font-['Inter']">
            {" "}
            terms and conditions
          </span>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full text-center py-3 my-5 rounded bg-amber-300 text-neutral-600 text-xl font-normal font-['Inter']  hover:bg-green-dark focus:outline-none "
          onClick={handleSignup}
        >
          Sign up
        </button>

        {/* Sign In With */}
        <div className="flex gap-2 justify-center items-center">
          <div className="w-[140px] h-[0px] border border-zinc-300"></div>
          <span className="text-neutral-400 text-xl font-normal font-['Open Sans']">
            Or Sign in with
          </span>
          <div className="w-[140px] h-[0px] border border-zinc-300"></div>
        </div>

        {/* Sign In Images */}
        <div className="flex justify-around w-full my-5">
          <Image
            width={40}
            height={40}
            alt="google"
            src={"/google.png"}
            onClick={handleSignupWithGoogle}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
          <Image
            width={40}
            height={40}
            alt="facebook"
            src={"/meta.png"}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
          <Image
            width={40}
            height={40}
            alt="apple"
            src={"/apple.png"}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </div>

        {/* Log In Button */}
        <div className="flex gap-2">
          <span className="text-neutral-400 text-xl font-normal font-['Open Sans']">
            Already have an account?
          </span>
          <span className="text-blue-600 text-xl font-normal font-['Inter']">
            Log in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
