"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleNavBar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <nav className="flex items-center justify-between text-black py-10 px-14">
      <Link href="/">Resume Sculptor</Link>
      <ul
        className={`flex-col space-y-10 py-20 lg:py-0 items-center lg:flex-row lg:space-y-0 lg:space-x-16 bg-white lg:bg-transparent absolute lg:static left-0 right-0 top-0 z-10    ${
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
          <Link href="/feature">Features</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>

        <div className="block lg:hidden">
          <Button text="Coming Soon" address="https://app.resumesculptor.com" />
        </div>
      </ul>
      <button
        onClick={toogleNavBar}
        className="block lg:hidden absolute right-20 z-30"
      >
        <RiMenu3Fill size={24} />
      </button>
      <div className="hidden lg:block">
        <Button text="Coming Soon" address="https://app.resumesculptor.com" />
      </div>
    </nav>
  );
};

export default Navbar;
