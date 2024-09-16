"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleNavBar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <nav className="flex items-center justify-between bg-white text-black py-10 px-14">
      <Link href="/">Resume Sculptor</Link>
      <ul
        className={`flex-col space-y-10 py-20 lg:py-0 items-center lg:flex-row lg:space-y-0 lg:space-x-16 bg-blue-50 lg:bg-transparent absolute lg:static left-0 right-0 top-0 z-10    ${
          !isOpen ? "hidden lg:flex" : "flex"
        }`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/feature">Feature</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>

        <Link
          href="https://app.resumesculptor.com"
          className="bg-black py-3 px-4 text-white text-sm rounded-xl block lg:hidden"
        >
          Get Started
        </Link>
      </ul>
      <button
        onClick={toogleNavBar}
        className="block lg:hidden absolute right-20 z-30"
      >
        MENU
      </button>
      <Link
        href="https://app.resumesculptor.com"
        className="bg-black py-3 px-4 text-white text-sm rounded-xl hidden lg:block"
      >
        Get Started
      </Link>
    </nav>
  );
};

export default Navbar;
