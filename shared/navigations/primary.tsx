import { useState } from "react";
import { PrimaryNavData } from "../../data/primary";

const PrimaryNavigation = () => {
  const [path, setPath] = useState<string>("forYou");
  return (
    <div className="w-fit h-[40px] flex gap-0.5 fixed top-0 border-b border-slate-200 justify-center bg-white">
      {PrimaryNavData.map((navLinks, index) => (
        <div
          className={`flex justify-center items-center p-2 px-4 cursor-pointer transition ${
            path === navLinks.path && "border-b-slate-400 border-b"
          }`}
          key={index}
          onClick={() => setPath(navLinks.path)}
        >
          <p className="text-sm font-medium">{navLinks.nav}</p>
        </div>
      ))}
    </div>
  );
};

export default PrimaryNavigation;
