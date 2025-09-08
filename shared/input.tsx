"use client";

import { useEffect, useState } from "react";
import { FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface props {
  label?: string;
  value?: string;
  type: "text" | "number" | "email" | "password" | "checkbox";
  onChange: (value: string) => void;
  placeholder?: string;
}

const Input: React.FC<props> = ({
  label,
  value,
  type,
  onChange,
  placeholder,
}) => {
  const [iconVisible, setIconVisible] = useState<boolean>(false);

  return (
    <div className={`flex flex-col gap-2 text-xs`}>
      {type != "checkbox" && <label>{label}</label>}

      <div
        className={`border border-slate-300 rounded items-center flex justify-end w-full`}
      >
        {/* {type == "email" && <MdEmail className="ml-3" size={17} />}
        {type == "password" && <FaLock className="ml-3" size={14} />}
        {type == "text" && <FaUser className="ml-3" size={14} />} */}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`p-3 px-2.5 pl-4 placeholder:text-[11px] w-full bg-none border-none outline-none`}
          placeholder={placeholder}
          onClick={() => setIconVisible(true)}
        />
        {type == "password" && iconVisible && (
          <FaEyeSlash className="absolute mr-3 text-right" size={15} />
        )}
      </div>
    </div>
  );
};

export default Input;
