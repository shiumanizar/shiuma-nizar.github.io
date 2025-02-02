import React, { useState } from "react";
import { FaCogs } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-scroll"; // Import react-scroll Link

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
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-white hover:text-indigo-300 cursor-pointer"
            >
              Shiuma
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="px-4 py-2 text-lg text-white font-medium rounded-lg hover:bg-indigo-700 hover:text-slate-800 transition duration-300 cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-4 py-2 text-lg text-white font-medium rounded-lg hover:bg-indigo-700 hover:text-slate-800 transition duration-300 cursor-pointer"
            >
              Projects
            </Link>
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
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex justify-center items-center z-[100]">
          {/* Close Button Positioned Absolutely */}
          <AiOutlineClose
            onClick={toggleMenu}
            size={30}
            className="absolute top-5 right-6 text-white cursor-pointer z-[110]" // Increased z-index
          />

          <ul className="text-center">
            <li className="py-3 text-2xl text-white hover:text-indigo-400 cursor-pointer">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={toggleMenu} // Close menu when clicked
              >
                Skills
              </Link>
            </li>
            <li className="py-3 text-2xl text-white hover:text-indigo-400 cursor-pointer">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={toggleMenu} // Close menu when clicked
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
