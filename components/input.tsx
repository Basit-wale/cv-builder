import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface props {
  placeholder?: string;
  type: "text" | "number" | "email" | "password" | "search";
  value: string;
  onChange: (e) => void;
}

const Input: React.FC<props> = ({ placeholder, type, value, onChange }) => {
  const [inputIsOpen, setInputIsOpen] = useState<boolean>(false);
  return (
    <div
      className="py-1 px-2 hidden flex-col w-32 justify-end searchBar-responsive-design absolute top-0 right-36 bg-white z-50 border border-slate-200 rounded-md shadow-md transition-all duration-300"
      onMouseEnter={() => setInputIsOpen(true)}
      onMouseLeave={() => setInputIsOpen(false)}
      onClick={() => setInputIsOpen(true)}
    >
      <div className="flex items-center gap-1">
        {type === "search" && <FiSearch size={16} />}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`outline-none w-full text-sm `}
        />
      </div>

      <div
        className={`h-1 ${
          inputIsOpen === true ? "w-full" : "w-1/2"
        } border-b border-slate-500 transition-all duration-300`}
      ></div>
    </div>
  );
};

export default Input;
