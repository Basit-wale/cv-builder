import SearchInput from "@/shared/input";
import { useState } from "react";

const Feed = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All Pins");
  return (
    <div className="flex flex-col w-[800px] h-fit overflow-y-auto m-auto gap-3">
      <SearchInput
        value={search}
        onChange={setSearch}
        onClear={() => setSearch("")}
        placeholder="Search Templates..."
        dropdownLabel={selectedFilter}
        dropdownOptions={["All", "Your CVs", "Templates"]}
        onDropdownSelect={(option) => setSelectedFilter(option)}
      />
      <div className="flex w-full flex-col gap-4">
        <div className="w-full h-[300px] bg-gray-400"></div>
        <div className="w-full h-[300px] bg-gray-400"></div>
        <div className="w-full h-[300px] bg-gray-400"></div>
        <div className="w-full h-[300px] bg-gray-400"></div>
        <div className="w-full h-[300px] bg-gray-400"></div>
      </div>
    </div>
  );
};

export default Feed;
