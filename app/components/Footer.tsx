import React from "react";
import { footer } from "../data/HomePage";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="px-4 md:px-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-neutral-900 dark:text-white">
              <div className="size-6 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">
                  school
                </span>
              </div>
              <h2 className="text-lg font-bold">{footer.company}</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              {footer.description}
            </p>
          </div>
          {footer.menus.map((menu, index) => (
            <div key={index}>
              <h3 className="text-neutral-900 dark:text-white font-bold mb-4">
                {menu.title}
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
                {menu.links.map((link, index) => (
                  <li key={index}>
                    <a
                      className="hover:text-primary transition-colors"
                      href={link.href}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-neutral-900 dark:text-white font-bold mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Subscribe to our newsletter for tips and updates.
            </p>
            <div className="flex gap-2">
              <input
                className="flex-1 h-10 px-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your email"
                type="email"
              />
              <button className="h-10 px-4 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 English LMS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              className="text-gray-400 hover:text-primary transition-colors"
              href="#"
            >
              <span className="sr-only">Facebook</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clip-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              className="text-gray-400 hover:text-primary transition-colors"
              href="#"
            >
              <span className="sr-only">Twitter</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a
              className="text-gray-400 hover:text-primary transition-colors"
              href="#"
            >
              <span className="sr-only">Instagram</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clip-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.488 2h.172zm-2.546 9.854a2.546 2.546 0 100 5.092 2.546 2.546 0 000-5.092zM12.488 4c-2.404 0-2.716.01-3.71.054-1.005.045-1.55.203-1.92.348-.48.188-.82.41-1.176.765-.355.355-.577.696-.765 1.176-.145.37-.303.915-.348 1.92-.045.994-.055 1.306-.055 3.71s.01 2.716.055 3.71c.045 1.005.203 1.55.348 1.92.188.48.41.82.765 1.176.355.355.696.577 1.176.765.37.145.915.303 1.92.348.994.045 1.306.055 3.71.055s2.716-.01 3.71-.055c1.005-.045 1.55-.203 1.92-.348.48-.188.82-.41 1.176-.765.355-.355.577-.696.765-1.176.145-.37.303-.915.348-1.92.045-.994.055-1.306.055-3.71s-.01-2.716-.055-3.71c-.045-1.005-.203-1.55-.348-1.92-.188-.48-.41-.82-.765-1.176-.355-.355-.696-.577-1.176-.765-.37-.145-.915-.303-1.92-.348-.994-.045-1.306-.055-3.71-.055z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
