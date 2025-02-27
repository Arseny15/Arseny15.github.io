import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-center">
        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden absolute left-4 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Simple Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop & Mobile Navigation */}
        <div className="hidden md:flex space-x-20">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-gray-400" : "hover:text-gray-400"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/cv"
            className={({ isActive }) =>
              isActive ? "text-gray-400" : "hover:text-gray-400"
            }
          >
            CV
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-gray-400" : "hover:text-gray-400"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-gray-400" : "hover:text-gray-400"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-900 p-4 flex flex-col items-center md:hidden">
            <NavLink
              to="/"
              className="py-2 text-lg hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/cv"
              className="py-2 text-lg hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              CV
            </NavLink>
            <NavLink
              to="/projects"
              className="py-2 text-lg hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="py-2 text-lg hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
