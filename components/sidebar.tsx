import {
  FiBell,
  FiFileText,
  FiHome,
  FiSearch,
  FiSettings,
  FiStar,
} from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { SideBarData } from "../data/sidebar";
import { useState } from "react";
import cvTemplate from "../assets/cvTemplate.png";
import { MdArrowRightAlt } from "react-icons/md";
import "../components/sidebar.css";

const SideBar = ({ className }) => {
  const [active, setActive] = useState<string>("Home");
  return (
    <div
      className={`${className} fixed top-0 left-0 heading h-full w-72 bg-gray-800 z-50 text-white transform transition-transform duration-300 ease-in-out p-4 px-6 flex flex-col gap-6 overflow-y-auto`}
      onClick={(e) => e.stopPropagation()}
    >
      <p className="font-medium">CV Builder</p>

      <div className="flex flex-col gap-4 py-4 border-y border-gray-700">
        <p className="font-medium">MENU</p>

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
                onClick={() => setActive(item.nav)}
              >
                <div className="flex gap-2 items-center">
                  {item.nav === "Home" && <FiHome size={20} />}
                  {item.nav === "Search" && <FiSearch size={20} />}
                  {item.nav === "Your CVs" && <FiFileText size={20} />}
                  {item.nav === "Premium" && <FiStar size={20} />}
                  {item.nav === "Notifications" && <FiBell size={20} />}
                  {item.nav === "Settings" && <FiSettings size={20} />}
                  <p className="text-[13px]">{item.nav}</p>
                </div>

                {active === item.nav ? <IoIosArrowForward /> : ""}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
