"use client";

import SideBar from "../../components/sidebar";
import Header from "../../components/header";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sideBar, setSideBar] = useState<boolean>(true);
  return (
    <div
      className="w-full flex flex-col h-screen"
      onClick={() => setSideBar(true)}
    >
      <SideBar
        className={`${sideBar ? "translate-x-0" : "-translate-x-full"}
        }`}
      />

      <div className="flex flex-col">
        <Header />
        <div className="sticky top-0">
          <div className="h-[30px] w-[30px] top-4 left-4 absolute cursor-pointer">
            <FiMenu
              onClick={(e) => {
                setSideBar(true);
                e.stopPropagation();
              }}
              size={24}
            />
          </div>
        </div>
        <main className="p-4 overflow-y-auto text-center">{children}</main>
      </div>
    </div>
  );
}
