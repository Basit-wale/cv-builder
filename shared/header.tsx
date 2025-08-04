"use client";

import PrimaryNavigation from "./navigations/primary";
import "../assets/header.css";
import { FiMenu } from "react-icons/fi";
import Input from "../components/input";
import { useState } from "react";

const Header = () => {
  //   if (screenLeft === 100) {
  //     console.log("Please fuck off");
  //   }
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="w-full border border-t-0 border-slate-200 h-[40px] flex justify-between items-center px-4">
      <div className="w-[25vw]">
        <p className="font-medium text-lg">CB</p>
      </div>
      <div className="w-[40vw] justify-center items-center hidden nav-responsive-design">
        <PrimaryNavigation />
      </div>

      <div className="gap-2 text-sm w-[25vw] flex items-center justify-end">
        {/* <div>
          <Input
            type="search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div> */}
        <div className="hidden gap-2 header-responsive-design">
          <p className="underline">Login</p>
          <p className="underline">Signup</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
