"use client";

import SideBar from "../../components/sidebar";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sideBar, setSideBar] = useState<boolean>(false);

  useEffect(() => {
    if (isMobile) {
      setSideBar(false);
    } else {
      setSideBar(true);
    }
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="w-full flex flex-col h-screen"
      onClick={() => {
        if (isMobile) {
          setSideBar(false);
        } else {
          setSideBar(true);
        }
      }}
    >
      <SideBar
        className={`${sideBar ? "translate-x-0" : "-translate-x-full"}
        }`}
      />

      <div className="flex flex-col">
        {/* <Header /> */}
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
        <main className="overflow-y-auto text-center">{children}</main>
      </div>
    </div>
  );
}
