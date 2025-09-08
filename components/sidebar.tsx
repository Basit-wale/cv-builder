"use client";

import { FiHome, FiSettings } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { SideBarData, SpecialTabs } from "../data/sidebar";
import { useEffect, useState } from "react";
import "../styles/sidebar.css";
import { useRouter } from "next/navigation";
import { FiPlusSquare } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

interface props {
  className: string;
}

const SideBar: React.FC<props> = ({ className }) => {
  const [active, setActive] = useState<string>("");
  const router = useRouter();
  const iconSize = 29;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <div
          className={`${className} fixed top-0 left-0 heading h-full w-64 bg-gradient-to-b from-[#0284C7] to-[#0d5b6d] z-50 text-white transform transition-transform duration-300 ease-in-out p-4 px-6 flex flex-col gap-6 overflow-y-auto`}
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
                      {item.nav === "Create Post" && <FiPlusSquare size={20} />}
                      {item.nav === "Home" && <FiHome size={20} />}
                      {item.nav === "Chats" && (
                        <IoChatboxEllipsesOutline size={20} />
                      )}
                      {item.nav === "Settings" && <FiSettings size={20} />}
                      {item.nav === "Dashboard" && (
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
          className={`${className} fixed top-0 left-0 heading h-full w-[5em] bg-gradient-to-b from-[#0e9fc0] to-[#0d5b6d] z-50 text-white transform transition-transform duration-300 ease-in-out p-4 px-6 flex flex-col justify-between overflow-ellipsis`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-bold text-center">CB</p>

            <div className="flex flex-col gap-4 py-6 border-y border-gray-700">
              <div className="flex flex-col gap-6">
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

                      {item.nav === "Create Post" && (
                        <div className="p-3 hover:bg-[#00000011] rounded-full transition-all duration-200">
                          <FiPlusSquare size={iconSize} />
                        </div>
                      )}
                      {item.nav === "Home" && (
                        <div className="p-3 hover:bg-[#00000011] rounded-full transition-all duration-200">
                          <FiHome size={iconSize} />
                        </div>
                      )}
                      {item.nav === "Chats" && (
                        <div className="p-3 hover:bg-[#00000011] rounded-full transition-all duration-200">
                          <IoChatboxEllipsesOutline size={iconSize} />
                        </div>
                      )}
                      {item.nav === "Dashboard" && (
                        <div className="p-3 hover:bg-[#00000011] rounded-full transition-all duration-200">
                          <LuLayoutDashboard size={iconSize} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {SpecialTabs.map((tabs, index) => (
              <div
                className={`flex items-center justify-center cursor-pointer`}
                onClick={() => {
                  router.push(`/${tabs.path}`);
                }}
                onMouseEnter={() => setActive(tabs.nav)}
                onMouseLeave={() => setActive("")}
                onClickCapture={() => setActive(tabs.nav)}
                key={index}
              >
                {tabs.nav === "Settings" && (
                  <div className="p-3 hover:bg-[#00000011] rounded-full transition-all duration-200">
                    <FiSettings size={iconSize} />
                  </div>
                )}

                {tabs.nav === "Profile" && (
                  <div className="p-3 hover:bg-[#00000011] rounded-full transition-all duration-200">
                    <FaUserCircle size={iconSize} />
                  </div>
                )}

                <AnimatePresence>
                  {active === tabs.nav && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-full z-50 ml-2 whitespace-nowrap p-1.5 px-2 bg-[#232323] text-white text-sm rounded-lg scale-95 origin-left opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-200"
                    >
                      <p className="text-[12px] text">{tabs.nav}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
