import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-center">
        <div className="flex w-1/2 justify-between">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-gray-400" : "hover:text-gray-400"}
          >
            About
          </NavLink>
          <NavLink 
            to="/cv" 
            className={({ isActive }) => isActive ? "text-gray-400" : "hover:text-gray-400"}
          >
            CV
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? "text-gray-400" : "hover:text-gray-400"}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "text-gray-400" : "hover:text-gray-400"}
          >
            Socials
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
