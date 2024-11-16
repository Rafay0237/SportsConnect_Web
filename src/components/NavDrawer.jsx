import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { navData } from "../assets/lib/navData";

function NavDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="relative text-center">
      <RiMenuFill className="h-6 w-6 cursor-pointer" onClick={toggleDrawer} />

      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50"
          onClick={closeDrawer}
        ></div>
      )}

      <div
        id="drawer-example"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-gradient-to-l from-slate-800 to-[#121928] ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } w-80 dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <button
          type="button"
          onClick={toggleDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-5 h-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        <div>
          <Link to="/">
            <p className="font-semibold mb-4">Sports Connect</p>
          </Link>
          <ul className=" text-left  font-semibold text-[16px] ">
            {navData.map((data, index) => (
              <Link to={data.link} key={index}>
                <li
                  className="relative group hover:cursor-pointer border-gray-100 border-b-2 py-3"
                  onClick={toggleDrawer}
                >
                  {data.title}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavDrawer;
