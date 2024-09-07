import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white text-black px-10">
      <Link href="/profile">Profile</Link>
      <div>Notice</div>
    </nav>
  );
};

export default Navbar;
