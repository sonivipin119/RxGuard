import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-sky-900 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} RxShield. All rights reserved.
        </p>
        <div className="mt-2">
          <Link to="/terms" className="mx-2 hover:underline"> Terms & Conditions</Link>
          |
          <Link to="/privacy" className="mx-2 hover:underline"> Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;