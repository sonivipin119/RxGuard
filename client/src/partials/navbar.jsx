import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-sky-900 text-white px-6 py-4 shadow-lg mt-0 top-0 w-[100vw]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          RxShield
        </Link>

        {/* Nav Links */}
        <ul className="flex space-x-6 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-gray-200 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="hover:text-gray-200 transition-colors duration-200"
            >
              SignUp
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-gray-200 transition-colors duration-200"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/terms"
              className="hover:text-gray-200 transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link
              to="/privacy"
              className="hover:text-gray-200 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
