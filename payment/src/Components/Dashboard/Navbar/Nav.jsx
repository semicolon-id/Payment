import React from "react";
import { useState } from "react";
import img1 from "../assets/py2.png";
const Nav = () => {
  const [open, setopen] = useState(false);

  return (
    <div>
      <nav className="z-30 rounded-t-lg bg-transparent border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <a href="https://flowbite.com/" class="flex items-center">
            <img src={img1} class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-dark text-white">
              Payme
            </span>
          </a>
          <button
            type="button"
            onClick={() => {
              setopen(!open);
            }}
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={` ${
              open ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul
              className=" lg:gap-10 font-medium flex flex-col p-4 md:p-0 mt-4   rounded-lg
             bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent
              md:dark:bg-transparent dark:border-purple"
            >
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white rounded  hover:bg-gray-100 md:hover:bg-transparent 
                  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500
                   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-right"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent 
                  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500
                   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-right"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent 
                  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500
                   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-right"
                >
                  Pricing
                </a>
              </li>
              <li className="   rounded-xl px-2 text-right">
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent 
                  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500
                   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-right"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
