import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavbarData from "./NavbarData";
import "./Navbar.css";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 p-2 rounded-md">
            {/* Logo Icon */}
          </div>
          <span className="text-xl font-bold">Vital+Flow</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {NavbarData.map((item) => (
            <NavLink
              key={item.id}
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-black-700 hover:text-gray-500"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition"
          >
            Book a call
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {/* Hamburger Icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-2">
          {NavbarData.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="block text-gray-700 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/consultation"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Book a call
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
