"use client";

import { FiHome, FiSettings } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { SideBarData } from "../data/sidebar";
import { useEffect, useState } from "react";
import "../styles/sidebar.css";
import { useRouter } from "next/navigation";
import { FiPlusSquare } from "react-icons/fi";
import { SiReaddotcv } from "react-icons/si";
import { LuLayoutDashboard } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

interface props {
  className: string;
}

const SideBar: React.FC<props> = ({ className }) => {
  const [active, setActive] = useState<string>("Home");
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <div
          className={`${className} fixed top-0 left-0 heading h-full w-64 bg-[#1a8ea8] z-50 text-white transform transition-transform duration-300 ease-in-out p-4 px-6 flex flex-col gap-6 overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          <p className="font-medium">CV Builder</p>

          <div className="flex flex-col gap-4 py-4 border-y border-gray-700">
            <div className="flex flex-col gap-1">
              {SideBarData.map((item, index) => (
                <div className="flex items-center justify-between" key={index}>
                  {active === item.nav && (
                    <div className="h-[2.06em] w-[2.06em] rounded bg-gray-700 absolute -translate-x-[3em] transition-all duration-300"></div>
                  )}

                  <div
                    className={`flex items-center h-[2.06em] justify-between cursor-pointer hover:bg-gray-700 p-2 w-full transition-all duration-300 ${
                      active === item.nav && "bg-gray-700"
                    } rounded`}
                    onClick={() => {
                      setActive(item.nav);
                      router.push(`/${item.path}`);
                    }}
                  >
                    <div className="flex gap-2 items-center">
                      {item.nav === "Create CV" && <FiPlusSquare size={20} />}
                      {item.nav === "Home" && <FiHome size={20} />}
                      {item.nav === "Your CVs" && <SiReaddotcv size={20} />}
                      {item.nav === "Settings" && <FiSettings size={20} />}
                      {item.nav === "Projects" && (
                        <LuLayoutDashboard size={20} />
                      )}
                      <p className="text-[13px]">{item.nav}</p>
                    </div>

                    {active === item.nav ? <IoIosArrowForward /> : ""}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${className} fixed top-0 left-0 heading h-full w-[5em] bg-[#1a8ea8] z-50 text-white transform transition-transform duration-300 ease-in-out p-4 px-6 flex flex-col justify-between overflow-ellipsis`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-bold text-center">CB</p>

            <div className="flex flex-col gap-4 py-8 border-y border-gray-700">
              <div className="flex flex-col gap-10">
                {SideBarData.map((item, index) => (
                  <div
                    className="flex items-center justify-center relative"
                    key={index}
                  >
                    <div
                      className={`flex items-center cursor-pointer`}
                      onClick={() => {
                        router.push(`/${item.path}`);
                      }}
                      onMouseEnter={() => setActive(item.nav)}
                      onMouseLeave={() => setActive("")}
                      onClickCapture={() => setActive(item.nav)}
                    >
                      <AnimatePresence>
                        {active === item.nav && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-full z-50 ml-8 whitespace-nowrap p-1.5 px-2 bg-[#232323] text-white text-sm rounded-lg scale-95 origin-left opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-200"
                          >
                            <p className="text-[12px] text">{item.nav}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {item.nav === "Create CV" && (
                        <div className="p-3 hover:bg-[#00000011] rounded-full transition-all duration-200">
                          <FiPlusSquare size={30} />
                        </div>
                      )}
                      {item.nav === "Home" && (
                        <div className="p-3 hover:bg-[#00000011] rounded-full transition-all duration-200">
                          <FiHome size={30} />
                        </div>
                      )}
                      {item.nav === "Your CVs" && (
                        <div className="p-3 hover:bg-[#00000011] rounded-full transition-all duration-200">
                          <SiReaddotcv size={30} />
                        </div>
                      )}
                      {item.nav === "Projects" && (
                        <div className="p-3 hover:bg-[#00000011] rounded-full transition-all duration-200">
                          <LuLayoutDashboard size={30} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`flex items-center justify-center cursor-pointer`}
            onClick={() => {
              router.push(`/settings`);
            }}
            onMouseEnter={() => setActive("Settings")}
            onMouseLeave={() => setActive("")}
            onClickCapture={() => setActive("Settings")}
          >
            <div className="p-3 hover:bg-[#00000011] rounded-full transition-all duration-200">
              <FiSettings size={30} />
            </div>

            <AnimatePresence>
              {active === "Settings" && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-full z-50 ml-2 whitespace-nowrap p-1.5 px-2 bg-[#232323] text-white text-sm rounded-lg scale-95 origin-left opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-200"
                >
                  <p className="text-[12px] text">Settings</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
