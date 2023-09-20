import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { FaBars, FaTimes } from "react-icons/fa";

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  {
    /* const [isDarkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = (checked) => {
    setDarkMode(checked);
     };  */
  }
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-7 py-4 bg-gray-900 text-white font-bold relative ">
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black-500">&lt;ICODER/&gt;
        </h1>
      {/* <div className="logo">
        <img src="/src/assets/logo.png"/>
       </div> */}

      <div
        className={`links hidden md:flex space-x-4 ${
          isMobileMenuOpen ? "hidden" : "block"
        }`}
      >
        <Link
          to="/Home"
          className="hover:text-blue-400 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="hover:text-blue-400 transition duration-300"
        >
          Project
        </Link>
        <Link
          to="/Contact"
          className="hover:text-blue-400 transition duration-300"
        >
          Contact
        </Link>
      </div>
      {/*  <DarkModeSwitch
         style={{ marginBottom: '1rem',marginRight:'1rem' }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={40}/>  */}

      {/* Mobile Menu for Small Screens */}
      <div className="md:hidden flex justify-end">
        <button
          className="text-whitefocus:outline-none p-2"
          onClick={toggleMobileMenu}
        >
          <div className="icon ">
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </div>
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full  bg-gray-900 opacity-90 z-10">
          <div className="flex flex-col space-y-4 py-8 text-center  bg-gray-900  ">
            <Link
              to="/Home"
              className="text-white hover:text-blue-400 transition duration-300"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-blue-400 transition duration-300"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link
              to="/Contact"
              className="text-white hover:text-blue-400 transition duration-300 "
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
