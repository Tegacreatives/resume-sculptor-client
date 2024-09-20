import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  address: string;
  light?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, address, light }) => {
  return (
    <Link
      href={address}
      className={` py-3 px-4  text-sm rounded-xl min-w-32 ${
        light ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {text}
    </Link>
  );
};

export default Button;
