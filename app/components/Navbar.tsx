import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white text-black py-10 px-14">
      <Link href="/">Resume Sculptor</Link>
      <ul className="flex space-x-14 text-gray-600">
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
      </ul>
      <Link
        href="https://app.resumesculptor.com"
        className="bg-black py-3 px-4 text-white text-sm rounded-xl"
      >
        Get Started
      </Link>
    </nav>
  );
};

export default Navbar;
