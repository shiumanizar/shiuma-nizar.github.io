import React, { useState } from "react";
import { FaCogs } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  function toggleMenu() {
    setNav(!nav);
  }

  return (
    <>
      {/* Navbar Container */}
      <nav className="bg-slate-900 text-white w-full fixed top-0 left-0 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo Section */}
          <div className="text-white font-mono text-3xl tracking-wider flex items-center select-none">
            <FaCogs className="mr-2" />
            Shiuma
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            <a
              href="#skills"
              className="px-4 py-2 text-lg font-medium rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="px-4 py-2 text-lg font-medium rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Projects
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            {nav ? (
              <AiOutlineClose
                onClick={toggleMenu}
                size={30}
                className="text-white cursor-pointer"
              />
            ) : (
              <HiMenuAlt1
                onClick={toggleMenu}
                size={30}
                className="text-white cursor-pointer"
              />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {nav && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex justify-center items-center">
          <ul className="text-center">
            <li className="py-3 text-2xl hover:text-indigo-400 cursor-pointer">
              Skills
            </li>
            <li className="py-3 text-2xl hover:text-indigo-400 cursor-pointer">
              Projects
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
