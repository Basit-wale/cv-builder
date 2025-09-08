"use client";

import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";

interface props {
  thirdPartyAuth?: boolean;
  text: string;
  className?: string;
  variant?: "small" | "medium" | "large";
}

const Button: React.FC<props> = ({
  text,
  className,
  thirdPartyAuth,
  variant,
}) => {
  const [size, setSize] = useState<string>("small");
  const [textStyle, setTextStyle] = useState<string>("");

  useEffect(() => {
    switch (variant) {
      case "small":
        setSize("w-[30px] p-2 text-center");
        break;
      case "medium":
        setSize("w-[70px] p-3 text-center");
        break;
      case "large":
        setSize("w-full p-3 px-2.5");
        setTextStyle("font-semibold");
        break;
    }
  }, []);

  return (
    <button
      className={`bg-slate-200 rounded flex gap-1 justify-center items-center ${size} ${className}`}
    >
      {thirdPartyAuth ? <FaGoogle size={16} /> : ""}

      <p className={`text-[14px] text-center ${textStyle}`}>{text}</p>
    </button>
  );
};

export default Button;
