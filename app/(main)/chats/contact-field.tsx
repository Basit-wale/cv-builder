"use client";

import SearchInput from "@/shared/globalSearch";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

interface props {
  contact: string;
  messageView: string;
  isOnline?: boolean | undefined;
}

const Contacts = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="w-[30%] h-full flex flex-col items-center pb-2 rounded-tl-xl rounded-bl-xl">
      <div className="w-full h-24 items-center px-6 justify-center flex">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search Contacts..."
          DropDown={false}
        />
      </div>

      <div className="w-full space-y-1 px-4 overflow-y-scroll pb-2">
        <Contact contact={"Jessica Jones"} messageView="Hi..." isOnline />
        <Contact contact={"Jessica Jones"} messageView="Hi..." />
        <Contact contact={"Jessica Jones"} messageView="Hi..." isOnline />
        <Contact contact={"Jessica Jones"} messageView="Hi..." />
        <Contact contact={"Jessica Jones"} messageView="Hi..." isOnline />
        <Contact contact={"Jessica Jones"} messageView="Hi..." isOnline />
        <Contact contact={"Jessica Jones"} messageView="Hi..." isOnline />
        <Contact contact={"Jessica Jones"} messageView="Hi..." />
        <Contact contact={"Jessica Jones"} messageView="Hi..." />
        <Contact contact={"Jessica Jones"} messageView="Hi..." isOnline />
        <Contact contact={"Jessica Jones"} messageView="Hi..." isOnline />
        <Contact contact={"Jessica Jones"} messageView="Hi..." isOnline />
        <Contact contact={"Jessica Jones"} messageView="Hi..." isOnline />
        <Contact contact={"Jessica Jones"} messageView="Hi..." isOnline />
        <Contact contact={"Jessica Jones"} messageView="Hi..." />
      </div>
    </div>
  );
};

export default Contacts;

const Contact: React.FC<props> = ({ contact, isOnline, messageView }) => {
  return (
    <div className="flex h-14 gap-2 px-3 items-center hover:from-emerald-500 hover:bg-gradient-to-l hover:to-emerald-600 cursor-pointer rounded-sm relative">
      <div className="h-10 w-10 rounded-full bg-slate-300 flex items-center justify-center">
        <FaUser size={20} color="white" />

        {isOnline ? (
          <div className="absolute h-2.5 w-2.5 rounded-full bg-emerald-500 mt-7 ml-6" />
        ) : (
          ""
        )}
      </div>

      <div className="flex flex-col items-start">
        <p className="text-[13px] font-medium">{contact}</p>
        <p className="text-xs">{messageView}</p>
      </div>
    </div>
  );
};
