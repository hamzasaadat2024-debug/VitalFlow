// src/Components/Navbar/Navbar.jsx
import React, { useState } from "react";
import NavbarData from "./NavbarData";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 6 3 6s3-3.5 3-6c0-1.657-1.343-3-3-3z"
              />
            </svg>
          </div>
          <span className="text-xl font-bold">Vital+Flow</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {NavbarData.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-gray-700 hover:text-blue-500"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button (desktop only) */}
        <div className="hidden md:block">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition">
            Book a call
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon when open
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger when closed
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-2">
          {NavbarData.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="block text-gray-700 hover:text-blue-500"
            >
              {item.label}
            </a>
          ))}
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition">
            Book a call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
