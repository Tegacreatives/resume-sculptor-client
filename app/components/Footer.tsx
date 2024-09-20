import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center text-sm text-gray-600 py-10 px-10 md:px-14 space-y-2 lg:pb-10">
      <p className="text-center">
        Hi I&apos;m Tega, currently working on bringing Resume Sculptor to life.{" "}
        <br /> Follow me on X to see my progress on the project.
      </p>
      <Link href="">
        <FaXTwitter />
      </Link>
    </div>
  );
};

export default Footer;
