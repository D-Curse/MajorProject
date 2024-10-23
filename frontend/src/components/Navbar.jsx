import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar absolute w-full flex items-center justify-center p-4  bg-opacity-0">
      <div className="flex items-center justify-center bg-white bg-opacity-0 border w-[85%] px-8 py-1 rounded-[50px]">
      <div className="flex-1">
        <button className="">
          <Link to="/">
            <img src="/images/landingPage/Logo.svg" alt="logo" />
          </Link>
        </button>
      </div>  
      <div className="flex items-center space-x-4">
        <button className="p-2 text-white font-semibold">GITHUB</button>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="focus:outline-none focus:ring-2 bg-indigo-500 hover:bg-white hover:text-indigo-500 focus:ring-black-500 text-white py-2 px-3 rounded-full"
          >
            <i class="fa-solid fa-user"></i>
          </button>
          {isOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
              <li className="px-4 py-2 hover:bg-gray-100">
                <button className="flex justify-between w-full">
                  Profile
                  <span className="ml-2 text-sm text-red-500">New</span>
                </button>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <button>Logout</button>
              </li>
            </ul>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
