"use client"
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "../Context/userContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Credentials {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

//   const { login } = useUser();
//   const NavTo = useRouter();

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((pre) => ({ ...pre, [name]: value }));
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/user/login", {
        credentials,
      });

      console.log(res);
    //   login(res.data.details);
    //   if (res.status === 200) NavTo("/");
    } catch (error) {
      console.log("LOGIN ERROR", error);
    }
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-[#910A67] px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Log In</h1>

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={(e) => handleOnchange(e)}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => handleOnchange(e)}
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-[#3C0753] text-white hover:bg-green-dark focus:outline-none my-1"
            onClick={handleLogin}
          >
            Log In
          </button>

          <div className="text-grey-dark mt-6 text-center">
            Create an account?
            <Link
              className="no-underline border-b border-blue text-blue"
              href="/signup"
            >
              Sign Up
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
