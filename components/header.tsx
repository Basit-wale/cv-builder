"use client";

import PrimaryNavigation from "@/shared/navigations/primary";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="w-full h-[40px] flex justify-between items-center px-4">
      <div className="w-[25vw]">
        {/* <p className="font-medium text-lg">CB</p> */}
      </div>
      <div className="w-[40vw] justify-center items-center hidden nav-responsive-design">
        <PrimaryNavigation />
      </div>

      <div className="gap-2 text-sm w-[25vw] flex items-center justify-end">
        <div className="hidden gap-2 header-responsive-design">
          <p className="underline">Login</p>
          <p className="underline">Signup</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
