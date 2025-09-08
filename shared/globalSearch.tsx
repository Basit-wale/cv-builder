import React, { useState } from "react";
import { FiX, FiChevronDown, FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
  dropdownLabel?: string;
  dropdownOptions?: string[];
  onDropdownSelect?: (option: string) => void;
  DropDown?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onClear,
  placeholder = "Search...",
  dropdownLabel = "All Templates",
  dropdownOptions = [],
  onDropdownSelect,
  DropDown,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div className="flex items-center bg-[#d7d7d7] px-4 py-3 rounded-full w-full">
        <FiSearch className="mr-2 text-gray-500" size={20} />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="bg-transparent outline-none flex-1 text-[16px] font-medium text-gray-600"
        />

        {value && onClear && (
          <button onClick={onClear} className="text-gray-600 px-2">
            <FiX size={16} />
          </button>
        )}

        {DropDown === true && (
          <>
            <div className="w-px h-7 bg-gray-400 mx-2" />

            <button
              onClick={(e) => {
                setDropdownOpen(!dropdownOpen);
                e.stopPropagation();
              }}
              className="flex items-center text-[16px] font-semibold text-gray-800"
            >
              {dropdownLabel}
              <FiChevronDown className="ml-1" size={20} />
            </button>
          </>
        )}
      </div>

      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-1 w-fit bg-white border border-gray-200 shadow-md rounded-md z-50 flex flex-col divide-y divide-gray-200"
          >
            {dropdownOptions.map((option) => (
              <button
                key={option}
                onClick={(e) => {
                  onDropdownSelect?.(option);
                  setDropdownOpen(false);
                  e.stopPropagation();
                }}
                className="text-left px-3 py-2 text-[13px] hover:bg-gray-100"
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchInput;
