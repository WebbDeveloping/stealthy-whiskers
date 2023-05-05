import React from "react";

export default function NavDropdown({ isMenuOpen }) {
  return (
    <div
      className={`text-black md:flex md:items-center text-center bg-white ${
        isMenuOpen ? "block" : "hidden"
      }`}
    >
      <a
        href="/"
        className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-t border-[#e4e9ec]"
      >
        Home
      </a>
      <a
        href="/"
        className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-[#e4e9ec]"
      >
        About
      </a>
      <a
        href="/"
        className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-[#e4e9ec]"
      >
        Services
      </a>
      <a
        href="/"
        className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-[#e4e9ec]"
      >
        Contact
      </a>
    </div>
  );
}
