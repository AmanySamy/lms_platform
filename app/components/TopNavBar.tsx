import React from 'react'
import NavLink from './NavLink';
const links = [
  { href: '#', label: 'Courses' },
  { href: '#', label: 'About' },
  { href: '#', label: 'Pricing' },
];
const TopNavBar = () => {
  return (
    <header
        className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
      >
        <div
          className="px-4 md:px-10 py-3 flex items-center justify-between mx-auto max-w-7xl"
        >
          <div className="flex items-center gap-4 text-neutral-900 dark:text-white">
            <div className="size-8 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h2
              className="text-neutral-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]"
            >
              English LMS
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-9">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex gap-2">
            <button
              className="flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-primary dark:text-white text-sm font-bold leading-normal transition-colors"
            >
              <span className="truncate">Log in</span>
            </button>
            <button
              className="flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-blue-700 text-white text-sm font-bold leading-normal transition-colors shadow-sm"
            >
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </div>
      </header>
  )
}

export default TopNavBar