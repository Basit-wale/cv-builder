"use client";

import { use, useState } from "react";
import SideBar from "../../../components/sidebar";
import Feed from "./feed/feed";
import { FiMenu } from "react-icons/fi";

const Home = () => {
  const [sideBar, setSideBar] = useState<boolean>(false);
  return (
    <div
      className="w-full bg-white flex px-4"
      onClick={() => setSideBar(false)}
    >
      <SideBar
        className={`${sideBar ? "translate-x-0" : "-translate-x-full"}
        }`}
      />

      <div className="h-[30px] w-[30px] sticky top-4 left-4 cursor-pointer">
        <FiMenu
          onClick={(e) => {
            setSideBar(true);
            e.stopPropagation();
          }}
          size={24}
        />
      </div>
      <Feed />
    </div>
  );
};

export default Home;
