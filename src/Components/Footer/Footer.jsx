// src/Components/Footer/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* Logo Icon */}
            <div className="bg-blue-600 p-2 rounded-md">
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

          {/* Tagline */}
          <h4 className="text-lg font-semibold mb-4">
            Creative healthcare template to launch your site quick and easily.
          </h4>

          {/* Button */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Book a call
          </button>
        </div>

        {/* Right Side */}
        <div>
          {/* Header */}
          <h3 className="text-lg font-semibold mb-4">Stay up to date</h3>

          {/* Email + Subscribe */}
          <form className="flex gap-2 mb-2">
            <input
              type="email"
              placeholder="name@email.com"
              className="flex-1 rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-600 text-sm mb-8">
            by subscribing you will agree to privacy and policy
          </p>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Static pages</h4>
              <ul className="space-y-1">
                <li><a href="/" className="hover:text-blue-600">Home</a></li>
                <li><a href="/about" className="hover:text-blue-600">About</a></li>
                <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
                <li><a href="/404" className="hover:text-blue-600">404</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">CMS Pages</h4>
              <ul className="space-y-1">
                <li><a href="/services" className="hover:text-blue-600">Services</a></li>
                <li><a href="/doctors" className="hover:text-blue-600">Doctors</a></li>
                <li><a href="/careers" className="hover:text-blue-600">Careers</a></li>
                <li><a href="/blogs" className="hover:text-blue-600">Blogs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Detail pages</h4>
              <ul className="space-y-1">
                <li><a href="/service" className="hover:text-blue-600">Service (CMS)</a></li>
                <li><a href="/doctor" className="hover:text-blue-600">Doctor (CMS)</a></li>
                <li><a href="/career" className="hover:text-blue-600">Career (CMS)</a></li>
                <li><a href="/blog" className="hover:text-blue-600">Blogs (CMS)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Follow us</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-blue-600">Linkedin</a></li>
                <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
                <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-600">Youtube</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
