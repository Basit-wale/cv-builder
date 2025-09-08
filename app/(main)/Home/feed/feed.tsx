import SearchInput from "@/shared/globalSearch";
import { useState } from "react";

const Feed = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <div className="flex flex-col h-fit overflow-y-auto m-auto gap-3 min-h-screen w-4/5 overflow-x-hidden">
      <SearchInput
        value={search}
        onChange={setSearch}
        onClear={() => setSearch("")}
        placeholder="Search Templates..."
        dropdownLabel={selectedFilter}
        dropdownOptions={["All", "Templates"]}
        onDropdownSelect={(option) => setSelectedFilter(option)}
        DropDown={true}
      />
      <div className="test">
        <img
          src="https://i.pinimg.com/736x/d6/6d/4d/d66d4dca8181a25478622a41d82df809.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/1200x/b1/65/c3/b165c39eb57a84831777b74b084454d5.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/736x/11/5a/46/115a46c77caa5a2d21800cc42ac186f7.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/736x/f4/20/a3/f420a3c6190049d044595e463a725f69.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/1200x/7c/24/ac/7c24acb259aa36b131751be8343ab9e4.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/736x/1c/4c/8b/1c4c8b1a58ab3cb6d7ce200f9ca84d9e.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/736x/d6/6d/4d/d66d4dca8181a25478622a41d82df809.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/736x/23/c2/2d/23c22d0f0b9e0a9daf566f1a1c919aaf.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/736x/3e/ed/05/3eed054ede5661b2c8182e3e77a97d9b.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/736x/4e/94/0b/4e940b90f00766243045a906876d5324.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Feed;
