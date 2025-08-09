import { useState } from "react";

export default function PrimaryNavigation() {
  const [activeTab, setActiveTab] = useState("templates");

  return (
    <div className="flex justify-center fixed z-10">
      <div className="flex text-[13px] font-medium">
        <button
          onClick={() => setActiveTab("templates")}
          className={`py-1.5 px-2 transition-colors duration-200 ${
            activeTab === "templates"
              ? "text-[#232323] font-semibold"
              : "text-gray-600"
          }`}
        >
          Templates
        </button>

        <button
          onClick={() => setActiveTab("forYou")}
          className={`py-1.5 px-2 transition-colors duration-200 ${
            activeTab === "forYou"
              ? "text-[#232323] font-semibold"
              : "text-gray-600"
          }`}
        >
          For You
        </button>
      </div>

      <div
        className={`absolute bottom-0 h-[2px] bg-[#232323] transition-all duration-300`}
        style={{
          width: "19%",
          left: activeTab === "templates" ? "20%" : "70%",
        }}
      />
    </div>
  );
}
