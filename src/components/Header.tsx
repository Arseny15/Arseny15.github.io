import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-slate-950/95 text-slate-100 p-4 border-b border-white/10 fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <nav className="container mx-auto flex items-center relative">
        {/* Name on the left */}
        <div className="flex items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sky-300 hover:text-sky-200 transition-colors duration-200 font-bold text-xl lg:text-2xl"
          >
            Arsenii Stolbov
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-300 rounded-lg p-2 absolute right-0"
          onClick={() => setIsOpen(!isOpen)}
        >
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

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('home')}
            className="text-slate-300 hover:text-sky-300 transition-colors duration-200 font-semibold text-base lg:text-lg px-3 py-2 rounded-lg hover:bg-white/5"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="text-slate-300 hover:text-sky-300 transition-colors duration-200 font-semibold text-base lg:text-lg px-3 py-2 rounded-lg hover:bg-white/5"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-slate-300 hover:text-sky-300 transition-colors duration-200 font-semibold text-base lg:text-lg px-3 py-2 rounded-lg hover:bg-white/5"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-slate-300 hover:text-sky-300 transition-colors duration-200 font-semibold text-base lg:text-lg px-3 py-2 rounded-lg hover:bg-white/5"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-slate-300 hover:text-sky-300 transition-colors duration-200 font-semibold text-base lg:text-lg px-3 py-2 rounded-lg hover:bg-white/5"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-slate-300 hover:text-sky-300 transition-colors duration-200 font-semibold text-base lg:text-lg px-3 py-2 rounded-lg hover:bg-white/5"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-slate-950/95 backdrop-blur-md p-6 flex flex-col items-center md:hidden border-t border-white/10">
            <button
              onClick={() => scrollToSection('home')}
              className="py-4 text-xl text-slate-300 hover:text-sky-300 transition-colors duration-200 font-semibold px-4 rounded-lg hover:bg-white/5 w-full text-center"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="py-4 text-xl text-slate-300 hover:text-sky-300 transition-colors duration-200 font-semibold px-4 rounded-lg hover:bg-white/5 w-full text-center"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="py-4 text-xl text-slate-300 hover:text-sky-300 transition-colors duration-200 font-semibold px-4 rounded-lg hover:bg-white/5 w-full text-center"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="py-4 text-xl text-slate-300 hover:text-sky-300 transition-colors duration-200 font-semibold px-4 rounded-lg hover:bg-white/5 w-full text-center"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="py-4 text-xl text-slate-300 hover:text-sky-300 transition-colors duration-200 font-semibold px-4 rounded-lg hover:bg-white/5 w-full text-center"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="py-4 text-xl text-slate-300 hover:text-sky-300 transition-colors duration-200 font-semibold px-4 rounded-lg hover:bg-white/5 w-full text-center"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;