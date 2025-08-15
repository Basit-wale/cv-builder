import { useState } from "react";

export default function PrimaryNavigation() {
  const [activeTab, setActiveTab] = useState("templates");

  const tabs = [
    {
      tab: "templates",
    },
    {
      tab: "trending",
    },
  ];

  return (
    <div className="flex justify-center fixed z-10">
      <div className="flex text-[13px] font-medium">
        {tabs.map((tab, index) => (
          <button
            onClick={() => setActiveTab(tab.tab)}
            key={index}
            className={`py-1.5 px-2 transition-colors duration-200 ${
              activeTab === tab.tab
                ? "text-[#232323] font-semibold"
                : "text-gray-600"
            }`}
          >
            <p className="capitalize">{tab.tab}</p>
          </button>
        ))}
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
