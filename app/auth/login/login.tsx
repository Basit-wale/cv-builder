"use client";

import Input from "@/shared/input";
import { Fira_Sans } from "next/font/google";
import { useState } from "react";

const firaSansCondensed = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const LoginField = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <div className="space-y-2 text-center mb-4">
        <p className={`text-2xl font-medium ${firaSansCondensed.className}`}>
          Log In
        </p>
        <p className="text-[13px] capitalize text-gray-600">
          Provide the details below to log in to your account
        </p>
      </div>

      <div className="w-full space-y-2">
        <div className="space-y-4 w-full">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={setEmail}
            label="Email"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
            label="Password"
          />
        </div>

        <div className="flex w-full justify-between items-center text-[12.5px]">
          <div className="flex gap-1 justify-center text-gray-600 text-[12px]">
            <Input
              type="checkbox"
              onChange={() => console.log("Kill ur dad")}
            />
            <p>Keep me signed in</p>
          </div>

          <p className="text-[#1c93ad] cursor-pointer">Forgot Password?</p>
        </div>
      </div>

      <button className="bg-gradient-to-r from-[#0284C7] to-[#0d5b6d] text-white py-2 rounded w-full">
        Login
      </button>
    </>
  );
};

export const SignUpField = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  return (
    <>
      <div className="w-full">
        <div className="space-y-2 mb-4">
          <p className={`text-2xl font-medium ${firaSansCondensed.className}`}>
            Create an Account
          </p>
          <p className="text-[13px] capitalize text-gray-600">
            Fill in your details to create an account
          </p>
        </div>
      </div>

      <div className="space-y-4 w-full mb-4">
        <div className="flex gap-1 w-full">
          <Input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={setFirstName}
            label="First Name"
          />
          <Input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={setLastName}
            label="Last Name"
          />
        </div>
        <Input
          type="email"
          value={email}
          onChange={setEmail}
          label="Email"
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={setPassword}
          label="Password"
          placeholder="Password"
        />
        <Input
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Confirm Password"
        />
      </div>

      <div className="flex w-full justify-between text-sm">
        <div className="flex gap-2 items-center">
          <Input type="checkbox" onChange={() => console.log("Kill ur dad")} />
          <p className="text-sm">
            I agree to the{" "}
            <span className="text-[#1c93ad] cursor-pointer">Terms</span> &{" "}
            <span className="text-[#1c93ad] cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>

      <button className="bg-gradient-to-r from-[#0284C7] to-[#0d5b6d] text-white py-2 rounded w-full">
        Sign Up
      </button>
    </>
  );
};
