import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-slate-700 flex items-center justify-center p-3">
        <div className="container text-white py-4 px-8 md:px-20 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-bold text-3xl cursor-pointer">
            START FRAMEWORK
          </Link>

          {/* Other links */}
          <div className="space-x-4 font-bold text-s">
            <Link
              to="/about"
              className="nav-link p-2 rounded-lg focus:bg-teal-500"
            >
              ABOUT
            </Link>
            <Link
              to="/portfolio"
              className="nav-link p-2 rounded-lg focus:bg-teal-500"
            >
              PORTFOLIO
            </Link>
            <Link
              to="/contact"
              className="nav-link p-2 rounded-lg focus:bg-teal-500"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
