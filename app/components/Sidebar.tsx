import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-rose-100 h-full hidden md:block">
      <Link href="/">ResumeS</Link>
      <p>Dashboard</p>
    </aside>
  );
};

export default Sidebar;
