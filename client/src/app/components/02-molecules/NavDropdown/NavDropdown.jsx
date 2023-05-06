import React from "react";
import { Link } from "react-router-dom";

export default function NavDropdown({ isMenuOpen }) {
  return (
    <div
      className={`text-black md:flex w-full justify-end md:items-center text-center bg-white md:bg-transparent ${
        isMenuOpen ? "block" : "hidden"
      }`}
    >
      <Link
        to="/"
        className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-t border-[#e4e9ec] mx-4"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-[#e4e9ec] mx-4"
      >
        About
      </Link>
      <Link
        to="/products"
        className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-[#e4e9ec] mx-4"
      >
        Shop
      </Link>
      <Link
        to="/contact"
        className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-[#e4e9ec] mx-4"
      >
        Contact
      </Link>
      <Link
        to="/"
        className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-t border-[#e4e9ec] mx-4"
      >
        {" "}
        Home
      </Link>
    </div>
  );
}
