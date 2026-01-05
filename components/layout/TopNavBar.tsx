import React from "react";
import NavLink from "./NavLink";
import ThemeToggle from "../ThemeToggle";
import Link from "next/link";
const links = [
  { href: "/courses", label: "Courses" },
  { href: "#", label: "About" },
  { href: "#", label: "Pricing" },
];
const TopNavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-white border-b border-surface-divider">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between mx-auto max-w-7xl">
        <Link className="flex items-center gap-4 text-text-primary" href="/">
          <div className="size-8 text-brand-main flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">school</span>
          </div>
          <h2 className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">
            English LMS
          </h2>
        </Link>
        <nav className="hidden md:flex items-center gap-9">
          {links.map((link, index) => (
            <NavLink key={index} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex gap-2">
          <ThemeToggle />
          <button className="flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-brand-subtle hover:bg-surface-divider dark:hover:bg-gray-700 text-brand-main dark:text-white text-sm font-bold leading-normal transition-colors">
            <span className="truncate">Log in</span>
          </button>
          <button className="flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-brand-main hover:bg-blue-700 text-white text-sm font-bold leading-normal transition-colors shadow-sm">
            <span className="truncate">Get Started</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNavBar;
