import Link from "next/link";
import React from "react";

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Link
      className="text-neutral-900 dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal transition-colors"
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
